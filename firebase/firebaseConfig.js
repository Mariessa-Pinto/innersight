import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyDWs5opYcnnlMv5OYRGSKWXhhfuehdFmYo',
    authDomain: 'innersight-af9d1.firebaseapp.com',
    databaseURL: 'https://innersight-af9d1.firebaseio.com',
    projectId: 'innersight-af9d1',
    storageBucket: 'innersight-af9d1.appspot.com',
    messagingSenderId: '614603313394',
    appId: '1:614603313394:android:d90d9d3ffc669e1823c06b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const auth = getAuth(app);