let themepark = require("./time-calls.js");

var config = {
    apiKey: "AIzaSyAQnvII68bKPvYmmqyVapAAqCsPPYSkZe4",
    authDomain: "theme-park-19828.firebaseapp.com",
    databaseURL: "https://theme-park-19828.firebaseio.com",
    projectId: "theme-park-19828",
    storageBucket: "theme-park-19828.appspot.com",
    messagingSenderId: "1016572363425"
};

let firebaseObj = {};
firebaseObj.sendToFirebase = function () {
    if(event.target.className === "btn btn-sm itin-save"){
        console.log("Firebase is working");
        firebase.initializeApp(config);
        var database = firebase.database();
        var ref = database.ref('itineraries');
        var data = themepark.itinArray;
        ref.push(data);
    }

});

module.exports(firebaseObj);
