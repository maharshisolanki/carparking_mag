import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import * as firebase from 'firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';


var firebaseConfig = {
  apiKey: "AIzaSyD8xw2cPPfcZu_6GqMIFevQXHKqwxdKW18",
  authDomain: "car-parking-cd990.firebaseapp.com",
  databaseURL: "https://car-parking-cd990.firebaseio.com",
  projectId: "car-parking-cd990",
  storageBucket: "car-parking-cd990.appspot.com",
  messagingSenderId: "304896437768",
  appId: "1:304896437768:web:72e8c522e712ea21e02bbd",
  measurementId: "G-0BRX20SHJN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));