import app from "./init";
import { getDocs, getDoc, getFirestore, collection, doc } from "firebase/firestore";

const firestore = getFirestore(app);

export  async function retrieveData(collectionName: string) {
    const querySnapshot = await getDocs(collection(firestore, collectionName));
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
    const Snapshot = await getDoc(doc(firestore, collectionName, id));
    if (Snapshot.exists()) {
        return { id: Snapshot.id, ...Snapshot.data() };
    } else {
        return null;
    }

    const data = Snapshot.data();
    return data;
}