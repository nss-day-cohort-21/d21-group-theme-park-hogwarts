let themepark = require("./time-calls.js");

var config = {
    apiKey: "AIzaSyAQnvII68bKPvYmmqyVapAAqCsPPYSkZe4",
    authDomain: "theme-park-19828.firebaseapp.com",
    databaseURL: "https://theme-park-19828.firebaseio.com",
    projectId: "theme-park-19828",
    storageBucket: "theme-park-19828.appspot.com",
    messagingSenderId: "1016572363425"
};

firebase.initializeApp(config);
console.log("Firebase is working");
var database = firebase.database();
var ref = database.ref('itineraries');
var data = themepark.itinArray;
console.log(ref);
ref.push(data);