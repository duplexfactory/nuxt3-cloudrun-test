import {cert, getApps, initializeApp} from "firebase-admin/app";
import {defineNuxtPlugin} from "#app";

export default defineNuxtPlugin(({$config}) => {
    if (!getApps().length) {
        // initializeApp({
        //     credential: cert({
        //         projectId: $config.FIREBASE_PROJECT_ID,
        //         clientEmail: $config.FIREBASE_CLIENT_EMAIL,
        //         privateKey: $config.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        //     })
        // });
    }
});
