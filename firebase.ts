import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const filestore = getStorage(app)

export { firestore, filestore };
