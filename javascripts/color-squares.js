"use strict";
console.log("Color-squares, yo!");

let themepark = require("./time-calls.js");

var openMap = document.getElementById("openMap");
$("#openMap").on("click", () => {
    if (openMap.value === "I solemnly swear that I am up to no good") {
        $("#openMap").val("Mischief Managed");
        $(".map").toggleClass("mapButtonClicked");
        $(".clickArea").toggleClass("clickAreaToggle");
        $(".hidden-message").toggleClass("hidden-message-toggle");
        themepark.loadAreas()
        .then(showAreas);  
    } else {
        $("#openMap").val("I solemnly swear that I am up to no good");
        $(".map").toggleClass("mapButtonClicked");
        $(".hidden-message").toggleClass("hidden-message-toggle");
        themepark.loadAreas()
        .then(hideAreas);
    }
});

function showAreas(data) {
        let keys = Object.keys(data);
        let colorValue = "";
        let indAreaID;
            $.each(keys,(index, item) => {
                colorValue = data[item].colorTheme;
                indAreaID = data[item].id;
                $(`#box--${indAreaID}`).css("background", `#${colorValue}`);
            });
        }

function hideAreas(data) {
        let keys = Object.keys(data);
        let indAreaID;
            $.each(keys,(index, item) => {
                indAreaID = data[item].id;
                $(`#box--${indAreaID}`).css("background", `none`);
                $(`#box--${indAreaID}`).css("cursor", `pointer`);
            });
        }






















// var openMap = document.getElementById("openMap");

// var areaData = {};
// var areaID = "";

// function getJSON(url) {
//     return new Promise(function (resolve, reject) {
//         var loadAreas = new XMLHttpRequest();

//         loadAreas.addEventListener("load", loadAreasComplete);
//         loadAreas.addEventListener("error", loadAreasFailed);

//         function loadAreasComplete(event) {
//             // console.log("event", event);
//             if (event.target.status === 200) {
//                 console.log("The data loaded, Yo!");
//                 areaData = JSON.parse(event.target.responseText);
//                 showAreas(areaData);
//                 // checkAreas(areaData);
//             } else {
//                 console.log("Check the spelling of your file, Yo!");
//             }
//         }
//         function loadAreasFailed(event) {
//             console.log("Yo! Your data failed!");
//         }
//         loadAreas.open("GET", url);
//         loadAreas.send();
//     });
// }

// $("#openMap").on("click", () => {
//     if (openMap.value == "I solemnly swear that I am up to no good") {
//         getJSON("https://theme-park-19828.firebaseio.com/areas.json")
//             // .then(showAreas(areaData))
//             // .then(checkAreas(areaData))
//             .catch(function (e) {
//                 console.log(e);
//             });
//         $("#openMap").val("Mischief Managed");
//         $(".map").toggleClass("mapButtonClicked");
//         $(".clickArea").toggleClass("clickAreaToggle");
//         $(".hidden-message").toggleClass("hidden-message-toggle");

//     } else {
//         $("#openMap").val("I solemnly swear that I am up to no good");
//         $(".map").toggleClass("mapButtonClicked");
//         $(".hidden-message").toggleClass("hidden-message-toggle");
//     }
// });

//     function showAreas(data) {
//         let keys = Object.keys(data);
//         let colorValue = "";
//         let indAreaID;
//         $.each(keys,(index, item) => {
//             data[item].firebaseID = item;
//             areaData.push(data[item]);
//             colorValue = data[item].colorTheme;
//             indAreaID = data[item].id;
//             $(`#box--${indAreaID}`).css("background", `#${colorValue}`);
//         });


//         $("#openMap").on("click", () => {
//            $.each(keys,(index, item) => { 
//             data[item].firebaseID = item;
//             areaData.push(data[item]);
//             indAreaID = data[item].id;
//                 if(openMap.value == "I solemnly swear that I am up to no good"){
//                 // $("#output").html(" ");
//                 $(`#box--${indAreaID}`).css("background", `none`);
//                 $(`#box--${indAreaID}`).css("cursor", `pointer`);
//                 }
//             });
//         });    

//     }

