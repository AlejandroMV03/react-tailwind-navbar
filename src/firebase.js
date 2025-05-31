// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, inMemoryPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPdWZRQ-QlBbYVPE-YI71OxiEEvN6ND44",
  authDomain: "entornodetrabajo-ca17d.firebaseapp.com",
  projectId: "entornodetrabajo-ca17d",
  storageBucket: "entornodetrabajo-ca17d.firebasestorage.app",
  messagingSenderId: "210035414583",
  appId: "1:210035414583:web:ab18c476e533135e3991b2"
};

// Inicializas Firebase app
const app = initializeApp(firebaseConfig);

// Configuras Auth y provider para Google
const auth = getAuth(app);

// Cambiar persistencia para que no se guarde sesión entre recargas
setPersistence(auth, inMemoryPersistence).catch((error) => {
  console.error("Error al configurar persistencia:", error);
});

const provider = new GoogleAuthProvider();

export { auth, provider };
