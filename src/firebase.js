// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBg856JYoffxsnjw1q8zId8v1usTeNJ2K0',
  authDomain: 'portfolio-70217.firebaseapp.com',
  projectId: 'portfolio-70217',
  storageBucket: 'portfolio-70217.appspot.com',
  messagingSenderId: '1087722284949',
  appId: '1:1087722284949:web:66a492e74a2c9e755df89c',
  measurementId: 'G-M8P9FCZB4F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
