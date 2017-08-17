"use strict";

let date = new Date();
let currentDate = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();


$("#footer").html("Copyright Hogwarts School &copy; " + currentDate);
