var express=require('express');
var initializeApp = require('./node_modules/firebase/app') ;
var getAnalytics= require('./node_modules/firebase/analytics')
/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";*/



var server = express();

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/site.html');
  /*res.setHeader('Content-Type', 'text/html');
  res.status(200).send("<h1> Bonjour sur mon server </h1>")*/
})

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVfkti44lzk6HZhcbGHmAJsxhpeAGFrVo",
  authDomain: "hashweb-6f99f.firebaseapp.com",
  projectId: "hashweb-6f99f",
  storageBucket: "hashweb-6f99f.appspot.com",
  messagingSenderId: "254303976027",
  appId: "1:254303976027:web:eb300c8a43093297425d7e",
  measurementId: "G-BFEMN9QL4M"
};

// Initialize Firebase
const app = initializeApp.initializeApp(firebaseConfig);
//const analytics = getAnalytics.getAnalytics(app);


server.listen(2000, () => {
  console.log("server en ecoute sur le port : 2000")
})