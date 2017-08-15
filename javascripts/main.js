"use strict";
console.log("Main.js, Yo!");

let mapOpen = require('./event-listeners.js');
console.log(mapOpen);

let openMap = document.getElementById("openMap");

$("#openMap").on("click", ()=>{
    if(openMap.value == "I solemnly swear that I am up to no good"){
        openMap.value="Mischief Managed";
        $(".map").toggleClass("mapButtonClicked");
        $(".clickArea").toggleClass("clickAreaToggle");
        $(".hidden-message").toggleClass("hidden-message-toggle");
    }else{
        openMap.value="I solemnly swear that I am up to no good";
        $(".map").toggleClass("mapButtonClicked");
        $(".clickArea").toggleClass("clickAreaToggle");
        $(".hidden-message").toggleClass("hidden-message-toggle");
    }
});
