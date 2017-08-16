// "use strict";
// console.log("test-colors.js, YO!");

// let themepark = require("./time-calls.js");

// var openMap = document.getElementById("openMap");
// $("#openMap").on("click", () => {
//     if (openMap.value === "I solemnly swear that I am up to no good") {
//         $("#openMap").val("Mischief Managed");
//         $(".map").toggleClass("mapButtonClicked");
//         $(".clickArea").toggleClass("clickAreaToggle");
//         $(".hidden-message").toggleClass("hidden-message-toggle");
//         themepark.loadAreas()
//         .then(showAreas);  
//     } else {
//         $("#openMap").val("I solemnly swear that I am up to no good");
//         $(".map").toggleClass("mapButtonClicked");
//         $(".hidden-message").toggleClass("hidden-message-toggle");
//         themepark.loadAreas()
//         .then(hideAreas);
//     }
// });

// function showAreas(data) {
//         let keys = Object.keys(data);
//         let colorValue = "";
//         let indAreaID;
//             $.each(keys,(index, item) => {
//                 colorValue = data[item].colorTheme;
//                 indAreaID = data[item].id;
//                 $(`#box--${indAreaID}`).css("background", `#${colorValue}`);
//             });
//         }

// function hideAreas(data) {
//         let keys = Object.keys(data);
//         let indAreaID;
//             $.each(keys,(index, item) => {
//                 indAreaID = data[item].id;
//                 $(`#box--${indAreaID}`).css("background", `none`);
//                 $(`#box--${indAreaID}`).css("cursor", `pointer`);
//             });
//         }