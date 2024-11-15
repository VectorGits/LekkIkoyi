
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9MpzZ8Q2lq4h4_WBu66cP02fUH15MHuM",
  authDomain: "lekkikoyi.firebaseapp.com",
  projectId: "lekkikoyi",
  storageBucket: "lekkikoyi.firebasestorage.app",
  messagingSenderId: "908752588784",
  appId: "1:908752588784:web:39d4b39db75d5d996a9735"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

const storage = getStorage(app);
export { storage };