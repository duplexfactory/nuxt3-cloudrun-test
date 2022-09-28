import {getFirestore} from "firebase-admin/firestore";

export default async () => {
    const collections = await getFirestore().listCollections();
    return {
        collections: collections.map(col => col.id)
    };
}
