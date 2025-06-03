import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPdWZRQ-QlBbYVPE-YI71OxiEEvN6ND44",
  authDomain: "entornodetrabajo-ca17d.firebaseapp.com",
  projectId: "entornodetrabajo-ca17d",
  storageBucket: "entornodetrabajo-ca17d.firebasestorage.app",
  messagingSenderId: "210035414583",
  appId: "1:210035414583:web:ab18c476e533135e3991b2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Cambiar persistencia a local para que no se pierda al recargar
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error al configurar persistencia:", error);
});

const provider = new GoogleAuthProvider();

export { auth, provider };

