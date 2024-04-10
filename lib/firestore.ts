import { collection, addDoc, getDocs } from "firebase/firestore";
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
  HotelInfoDetails[]
> => {
  try {
    const snapshot = await getDocs(collection(firestore, COLLECTIONNAME));
    const documents = snapshot.docs.map(
      (doc) => doc.data() as HotelInfoDetails
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

// Update a document
// export const updateDocumentInFirestore = async (
//   documentId: string,
//   data: Partial<HotelInfoDetails>
// ) => {
//   try {
//     const documentRef = firestore.collection(COLLECTIONNAME).doc(documentId);
//     await documentRef.update(data);
//   } catch (error) {
//     console.error("Error updating document in Firestore:", error);
//   }
// };

// Delete a document
// export const deleteDocumentFromFirestore = async (documentId: string) => {
//   try {
//     const documentRef = firestore.collection(COLLECTIONNAME).doc(documentId);
//     await documentRef.delete();
//   } catch (error) {
//     console.error("Error deleting document from Firestore:", error);
//   }
// };
