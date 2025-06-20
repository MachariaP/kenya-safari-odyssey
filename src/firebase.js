// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged, signInWithCustomToken } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase with environment variables
const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG || '{}');
const appId = process.env.REACT_APP_APP_ID || 'nail-technician-booking';
const initialAuthToken = process.env.REACT_APP_INITIAL_AUTH_TOKEN || '';

const app = initializeApp(firebaseConfig, appId);
const auth = getAuth(app);
const db = getFirestore(app);

// Handle authentication
const initializeAuth = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        resolve(user);
      } else if (initialAuthToken) {
        signInWithCustomToken(auth, initialAuthToken)
          .then((userCredential) => resolve(userCredential.user))
          .catch((error) => {
            console.error('Custom token sign-in failed:', error);
            // Fallback to anonymous auth
            signInAnonymously(auth)
              .then((userCredential) => resolve(userCredential.user))
              .catch((err) => reject(err));
          });
      } else {
        signInAnonymously(auth)
          .then((userCredential) => resolve(userCredential.user))
          .catch((err) => reject(err));
      }
    }, reject);
  });
};

export { auth, db, initializeAuth };
