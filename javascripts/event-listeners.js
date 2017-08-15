"use strict";
console.log("Listening, Yo!");

let Themepark = {};
let openMap = document.getElementById("openMap");
// let openMap = document.getElementById("openMap");


// openMap.addEventListener("click", console.log("OPEN"));
// // $("#openMap").on("click", change);

let change = ()=>{
    openMap.value="Mischief Managed";
};

module.exports = {change};


