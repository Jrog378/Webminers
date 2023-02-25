import {initializeApp} from "firebase/app";
import {getFirestore, doc, setDoc,} from "firebase/firestore";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import Router from "next/router";

const firebaseConfig = {
    apiKey: "AIzaSyAXAn0p7_SG9pxz4GPQkxYmUSo0rBaZiDI",
    authDomain: "webminers-7a36d.firebaseapp.com",
    projectId: "webminers-7a36d",
    storageBucket: "webminers-7a36d.appspot.com",
    messagingSenderId: "829020836202",
    appId: "1:829020836202:web:29b143e682e5ad92635513"
};

let UserPlan = 'Loading...'
let UserEmail = 'Loading...'

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            plan: 'none',
        });


    } catch
        (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth).then(() => Router.push('/'))
};

export {
    auth,
    db,
    sendPasswordResetEmail,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};