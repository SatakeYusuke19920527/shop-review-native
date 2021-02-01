import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/storage";
import Constants from 'expo-constants';
import { Shop } from '../types/Shop';

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase); 
}

export const db = firebase.firestore()

export const getShops = async () => {
    const snapshot = await db.collection('shops').get();
    const shops: Shop[] = snapshot.docs.map(
      (doc) => doc.data() as Shop
    );
  return shops
};
