import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBedBnL_RHa0IMCgGzbOeuikZ216pxD1Zg",
  authDomain: "react-chatting-app-b2144.firebaseapp.com",
  databaseURL: "https://react-chatting-app-b2144.firebaseio.com",
  projectId: "react-chatting-app-b2144",
  storageBucket: "react-chatting-app-b2144.appspot.com",
  messagingSenderId: "723881819988",
  appId: "1:723881819988:web:8381a07af0be55db4b12c1"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />,
  document.getElementById('root')
);
