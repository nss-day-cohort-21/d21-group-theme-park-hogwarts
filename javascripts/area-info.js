"use strict";
console.log("area-info.js, Yo!");

var areaDataInfo = {};
var areaID = "";

let themePark = [];

function fillThemePark(data){
    let attractionKeys = Object.keys(data);
    let attrAreaID;
    let attrAreaDesc;
    let attrAreaName;
    let attrType;
    
	attractionKeys.forEach((item) =>{
		data[item].firebaseID = item;
        themePark.push(data[item]);
        attrAreaID = data[item].area_id;
        attrAreaDesc = data[item].description;
        attrAreaName = data[item].name;
        attrType = data[item].type_id;
        // console.log(attrType);

    });

    
    // console.log("themePark", themePark);
    }



function getAttractionJSON(url) {
    return new Promise(function (resolve, reject) {
        var loadAreaInfo = new XMLHttpRequest();

        loadAreaInfo.addEventListener("load", loadAreasComplete);
        loadAreaInfo.addEventListener("error", loadAreasFailed);

        function loadAreasComplete(event) {
            // console.log("event", event);
            if (event.target.status === 200) {
                console.log("The data loaded, Yo!");
                areaDataInfo = JSON.parse(event.target.responseText);
                getAreaInfo(areaDataInfo);
                // console.log(areaDataInfo);
            } else {
                console.log("Check the spelling of your file, Yo!");
            }
        }
        function loadAreasFailed(event) {
            console.log("Yo! Your data failed!");
        }
        loadAreaInfo.open("GET", url);
        loadAreaInfo.send();
    });
}

getAttractionJSON("https://theme-park-19828.firebaseio.com/areas.json");

function getAreaInfo(data) {
    let keys = Object.keys(data);
    let area_id;
    $.each(keys,(index, item) => {
        data[item].firebaseID = item;
        area_id = data[item].id;

        let attractionLoader = new XMLHttpRequest();
        attractionLoader.open("GET", `https://theme-park-19828.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=${area_id}`);
        console.log("attractionLoader val", `https://theme-park-19828.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=${area_id}`);
        attractionLoader.send();

        attractionLoader.addEventListener("load", function(){
            let data = JSON.parse(this.responseText);
            // console.log("data", data);
            fillThemePark(data);
            // console.log("themePark", themePark);
        });
    });

}