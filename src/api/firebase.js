import { getApps, getApp, initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  initializeFirestore,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { getAuth,getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import concerts from "../json/concerts.json"

const firebaseConfig = {
  apiKey: "AIzaSyCEhwiFGdWO9X_8jw3ulNij-I8nHqTPNm8",
  authDomain: "checkconcertgo.firebaseapp.com",
  projectId: "checkconcertgo",
  storageBucket: "checkconcertgo.appspot.com",
  messagingSenderId: "633293975077",
  appId: "1:633293975077:web:d2babcf64423517b1f59cc",
  measurementId: "G-8XHNFKZ65M"
};
const app_length = getApps().length > 0;
// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);
//REFERENCE AUTH
const auth = app_length ? getAuth(app) :
  initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
// REFERENCE DB
const db = app_length ? getFirestore(app) : initializeFirestore(app, { experimentalForceLongPolling: true, });


// REFERENCE COLLECTION
const concertsCollection = collection(db, "concerts");

export const feedConcerts = async () => {

  // ADD NEW DOCS
  concerts.forEach(async (concert) => {
    const docRef = doc(concertsCollection);
    await setDoc(docRef, {
      ...concert,
    });
  });
};

export const getConcerts = async () => {
  const concertSnapshot = await getDocs(concertsCollection);
  return concertSnapshot.docs.map(doc => doc.data());
};

const lightsticksCollection = collection(db, "lightsticks");

export const getLights = async () => {
  let lightstickSnapshot = await getDocs(lightsticksCollection);
  const lightstickList = lightstickSnapshot.docs.map(doc => doc.data());
  return lightstickList;
};

const phonesCollection = collection(db, "phones");

export const getPhones = async () => {
  let phoneSnapshot = await getDocs(phonesCollection);
  const phoneList = phoneSnapshot.docs.map(doc => doc.data());
  return phoneList;
};