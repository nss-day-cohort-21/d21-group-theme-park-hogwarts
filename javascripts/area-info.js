"use strict";
console.log("area-info.js, Yo!");

let themepark = require("./time-calls.js");

$("#map").click((event) => {
    if (event.target.className === "clickArea clickAreaToggle" || event.target.className === "clickArea clickAreaToggle border"){
        let btnID = event.target.id;
        let btnNum = btnID.slice(5);
        themepark.attractionInfo.length = 0;

        themepark.getAttractions(btnNum)
        .then ((attractionData) => {
            // console.log("att", attractionData);
            for (let obj in attractionData) {
                themepark.attractionInfo.push(attractionData[obj]);
            }
            return themepark.loadTypes();
        }).then
        ((loadedTypes) => {
            loadedTypes.forEach((item, index)=>{
                themepark.attractionInfo.forEach((element, position)=>{
                    if(item.id === themepark.attractionInfo[position].type_id){
                        // console.log("ARRAY!!!", item);
                        themepark.attractionInfo[position].attraction_type = item.name;
                        // console.log("YESSS!", themepark.attractionInfo[position].attraction_type);
                    }
                });
            });
            // console.log("MUTATION", themepark.attractionInfo);
            return themepark.loadAreas();
        }).then
        ((loadedAreas) => {
            loadedAreas.forEach((item, index)=>{
                themepark.attractionInfo.forEach((element, position)=>{
                    if(item.id === themepark.attractionInfo[position].area_id){
                        // console.log("ARRAY!!!", item);
                        themepark.attractionInfo[position].area_name = item.name;
                        // console.log("YESSS!", themepark.attractionInfo[position].attraction_type);
                    }
                });
                
            });
            console.log("birth", themepark.attractionInfo);
            // console.log("areas", loadedAreas);
        });
    }
});
    