import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  addDoc,
  where,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "rate-it-e153b.firebaseapp.com",
  projectId: "rate-it-e153b",
  storageBucket: "rate-it-e153b.appspot.com",
  messagingSenderId: "713553540090",
  appId: "1:713553540090:web:9114e6dea8ee72ec7b2a43"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Get a list of cities from your database
export async function get(options) {
  const {
    database,
    sort = {
      by: '',
      type: 'desc'
    },
    attendence_type = '',
    speciality_type = '',
    type = '',
    price = ''
  } = options

  const col = collection(db, database);
  let q = query(col);

  if (sort.by !== '') {
    q = query(q, orderBy(sort.by, sort.type));
  }

  if (attendence_type !== '') {
    q = query(q, where("attendence_type", "==", attendence_type));
  }

  if (speciality_type !== '') {
    q = query(q, where("speciality_type", "==", speciality_type));
  }

  if (type !== '') {
    q = query(q, where("type", "==", type));
  }

  if (price !== '') {
    q = query(q, where("price", "==", price));
  }

  const snapshot = await getDocs(q);
  const list = snapshot.docs.map(doc =>({...doc.data(), id: doc.id}));
  return list;
}

export async function add({database, data}) {
  try {
    await addDoc(collection(db, database), data);
    return { ok: true }
  } catch (e) {
    return { ok: false, error: e }
  }
}

export async function upload({file, name}) {
  try {
    var fileExt = file.name.split('.').pop();
    const storageRef = ref(storage, `/images/${name}.${fileExt}`);
    const uploadTask = await uploadBytesResumable(storageRef, file);
    const url = await getDownloadURL(uploadTask.ref)
    return { ok: true, url }
  } catch (e) {
    return { ok: false, error: e }
  }
}

export async function getDocument({database, id}) {
  const docRef = doc(db, database, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ok: true, data: docSnap.data()}
  } else {
    return { ok: false}
  }
}

export async function set({database, id, data}) {
  try {
    await setDoc(doc(db, database, id), data);
    return { ok: true }
  } catch (e) {
    return { ok: false, error: e }
  }
}
