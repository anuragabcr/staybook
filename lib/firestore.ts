import { collection, addDoc, getDocs } from "firebase/firestore";

import { firestore } from "@/firebase";
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
