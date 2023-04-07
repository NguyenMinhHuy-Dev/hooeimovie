import { addDoc, collection } from "firebase/firestore"
import { db } from "../config/firebase"


export const addUser = async (user) => {
    const useRef = await addDoc(collection(db, "users"), user);
    return useRef;
}