import {getAuth} from "firebase-admin/auth";

export default async () => {
    const auth = getAuth();
    const {users} = await getAuth().listUsers();
    return {users};
}
