"use strict";
console.log("Color-squares, yo!");

// https://theme-park-19828.firebaseio.com/areas.json

//I want the ID associated with the area to display when the map is opened.
//the IDs on the divs are numbered 1-8; the IDs for the attrations are 1-7

// let colorEvents = require("./event-listeners.js");
var openMap = document.getElementById("openMap");

var areaData = {};
var areaID = "";

function getJSON(url) {
    return new Promise(function (resolve, reject) {
        var loadAreas = new XMLHttpRequest();

        loadAreas.addEventListener("load", loadAreasComplete);
        loadAreas.addEventListener("error", loadAreasFailed);

        function loadAreasComplete(event) {
            // console.log("event", event);
            if (event.target.status === 200) {
                console.log("The data loaded, Yo!");
                areaData = JSON.parse(event.target.responseText);
                showAreas(areaData);
            } else {
                console.log("Check the spelling of your file, Yo!");
            }
        }

        function loadAreasFailed(event) {
            console.log("Yo! Your data failed!");
        }

        loadAreas.open("GET", url);
        loadAreas.send();
    });
}

$("#openMap").on("click", () => {
    if (openMap.value == "I solemnly swear that I am up to no good") {
        getJSON("https://theme-park-19828.firebaseio.com/areas.json")
            // .then(showAreas(areaData))
            .catch(function (e) {
                console.log(e);
            });
        $("#openMap").val("Mischief Managed");
        $(".map").toggleClass("mapButtonClicked");
        $(".clickArea").toggleClass("clickAreaToggle");
        $(".hidden-message").toggleClass("hidden-message-toggle");

    } else {
        $("#openMap").val("I solemnly swear that I am up to no good");
        $(".map").toggleClass("mapButtonClicked");
        $(".hidden-message").toggleClass("hidden-message-toggle");
    }
});

var personId = "";

    function showAreas(data) {
        let keys = Object.keys(data);
        let colorValue = "";
        let indAreaID;
        $.each(keys,(index, item) => {
            data[item].firebaseID = item;
            areaData.push(data[item]);
            colorValue = data[item].colorTheme;
            indAreaID = data[item].id;
            $(`#box--${indAreaID}`).css("background", `#${colorValue}`);
            $(`#box--${indAreaID}`).on("click", ()=>{
                console.log(`${indAreaID}`);
            });

            // let btnClickers = document.getElementsByClassName(`#box--${indAreaID}`);
            // for (var i = 0; i < btnClickers.length; i++){
            //     btnClickers[i].addEventListener("click", (event) => {
            //         personId = event.currentTarget.id;
            //         let getWhole = document.getElementById(personId);
            //         console.log(`${indAreaID}`);
            //     });
            // }
        });

        $("#openMap").on("click", () => {
           $.each(keys,(index, item) => { 
            data[item].firebaseID = item;
            areaData.push(data[item]);
            colorValue = data[item].colorTheme;
            indAreaID = data[item].id;
                if(openMap.value == "I solemnly swear that I am up to no good"){
                $(`#box--${indAreaID}`).css("background", `none`); 
                }
            });
        });    

    }

