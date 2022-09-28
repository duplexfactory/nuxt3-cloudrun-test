import {getFirestore} from "firebase-admin/firestore";

export default async () => {
    const ss = await getFirestore().collection("test").get();
    return {
        docs: ss.docs.map(d => d.data())
    };
}
