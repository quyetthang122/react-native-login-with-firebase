import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA-vy7ti0wRfAW37aAfxy73iQX2aFtcwo0',
  authDomain: 'note-app-85002.firebaseapp.com',
  databaseURL: 'https://note-app-85002.firebaseio.com',
  projectId: 'note-app-85002',
  storageBucket: 'note-app-85002.appspot.com',
  messagingSenderId: '556802024203',
  appId: '1:556802024203:web:7a26587463d6a9ef18b80e',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
