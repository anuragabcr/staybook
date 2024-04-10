import { collection, addDoc, getDocs, getDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { firestore, filestore } from "@/firebase";
import { HotelInfoDetails } from "./HotelDetails";

// CONST variables
const COLLECTIONNAME = "hotels";

// Add a document to a collection
export const addDataToFirestore = async (data: HotelInfoDetails) => {
  try {
    const docRef = await addDoc(collection(firestore, COLLECTIONNAME), data);
    console.log(docRef);
  } catch (error) {
    console.error("Error adding data to Firestore:", error);
  }
};

// Get all documents from a collection
export const getDocumentsFromFirestore = async (): Promise<
{ id: string; data: HotelInfoDetails }[]
> => {
  try {
    const snapshot = await getDocs(collection(firestore, COLLECTIONNAME));
    console.log(snapshot);
    
    const documents = snapshot.docs.map(
      (doc) => ({
        id: doc.id,
        data: doc.data() as HotelInfoDetails,
      })
    );
    return documents;
  } catch (error) {
    console.error("Error getting documents from Firestore:", error);
    return [];
  }
};

export const uploadImage = async(file: File) => {
  var downloadURL: string = "";
  try {
    const imageRef = ref(filestore, `hotels/${file.name + Math.random().toString(36).substring(2, 15)}`);
      await uploadBytes(imageRef, file);
      downloadURL = await getDownloadURL(imageRef);
  } catch (error) {
    console.log(error);
  }
  return downloadURL
}

// get a document
export const getDocumentById = async (
  documentId: string
):Promise <HotelInfoDetails | null> => {
  try {
    const docRef = doc(firestore, COLLECTIONNAME, documentId);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as HotelInfoDetails
  } catch (error) {
    console.error("Error finding document in Firestore:", error);
    return null
  }
};

// Update a document
export const updateDocumentInFirestore = async (
  documentId: string,
  data: Partial<HotelInfoDetails>
) => {
  try {
    const documentRef = doc(firestore, COLLECTIONNAME, documentId)
    await updateDoc(documentRef, data)
  } catch (error) {
    console.error("Error updating document in Firestore:", error);
  }
};

// Delete a document
// export const deleteDocumentFromFirestore = async (documentId: string) => {
//   try {
//     const documentRef = firestore.collection(COLLECTIONNAME).doc(documentId);
//     await documentRef.delete();
//   } catch (error) {
//     console.error("Error deleting document from Firestore:", error);
//   }
// };
