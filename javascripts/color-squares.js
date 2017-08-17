"use strict";
console.log("Color-squares, yo!");

let themepark = require("./time-calls.js");

var openMap = document.getElementById("openMap");
$("#openMap").on("click", () => {
    if (openMap.value === "I solemnly swear that I am up to no good") {
        $("#openMap").val("Mischief Managed");
        $(".map").addClass("mapButtonClicked");
        $(".clickArea").addClass("clickAreaToggle");
        $(".hidden-message").addClass("hidden-message-toggle");
        themepark.loadAreas()
        .then(showAreas);  
    } else {
        $("#openMap").val("I solemnly swear that I am up to no good");
        $(".map").removeClass("mapButtonClicked");
        $(".hidden-message").removeClass("hidden-message-toggle");
        $(".clickArea").removeClass("border");
        $(".clickArea").removeClass("clickAreaToggle");
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
                let R = hexToR(`${colorValue}`);
                let G = hexToG(`${colorValue}`);
                let B = hexToB(`${colorValue}`);
                function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16);}
                function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16);}
                function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16);}
                function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h;}
                    // console.log(R,G,B);
                    let alhpaColor = `rgba(${R},${G},${B},.4)`;
                $(`#box--${indAreaID}`).css("background-color", `${alhpaColor}`);
                console.log(alhpaColor);
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

