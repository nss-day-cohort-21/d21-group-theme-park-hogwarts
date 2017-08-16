"use strict";

console.log( "datacalls.js" );

// $(document).ready(function() {

var themepark = {};

themepark.loadTime = function() {
	return new Promise(function(resolve, reject) {

		let getTimes = new XMLHttpRequest();
		getTimes.open('GET', 'https://theme-park-19828.firebaseio.com/attractions.json?orderBy="area_id"' );
		getTimes.send();
		getTimes.addEventListener("load", (event) => {
			let times = JSON.parse(event.target.responseText);
			// console.log( "times", times );
			resolve(times);
		});

	});

};

themepark.loadAreas = function() {
	return new Promise(function(resolve, reject) {

		let getAreas = new XMLHttpRequest();
		getAreas.open('GET', 'https://theme-park-19828.firebaseio.com/areas.json');
		getAreas.send();
		getAreas.addEventListener("load", (event) => {
			let areas = JSON.parse(event.target.responseText);
			// console.log( "areas", areas );
			resolve(areas);
		});
	});
};

themepark.loadTypes = function() {
	return new Promise(function(resolve, reject) {

		let getTypes = new XMLHttpRequest();
		getTypes.open('GET', 'https://theme-park-19828.firebaseio.com/attraction_types.json');
		getTypes.send();
		getTypes.addEventListener("load", (event) => {
			let types = JSON.parse(event.target.responseText);
			// console.log( "types", types );
			resolve(types);
		});
	});
};

themepark.getAttractions = function(btnNum){
    return new Promise(function(resolve, reject) {
    let attractionLoader = new XMLHttpRequest();

    attractionLoader.open("GET", `https://theme-park-19828.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=${btnNum}`);
    attractionLoader.send();                
    attractionLoader.addEventListener("load", (event) => {
    
    let attractions = JSON.parse(event.target.responseText);
            console.log( "attractions", attractions );
            resolve(attractions);
        });
    });
};

themepark.attractionInfo = [];

let regex = /([^1][2]:)([0-5][0-9][p])\w+/ig;

console.log( "themepark.attractionInfo", themepark.attractionInfo );

themepark.loadTime()
.then(
	(timeData) => {

		timeData.forEach((item)=> {
			if (regex.test(item.times)) {
				themepark.attractionInfo.push(item);
			}
				
		});
		return themepark.loadAreas();

	}).then
	((loadedAreas) => {
		// console.log( "loaded", loadedAreas );

		for (let i = 0; i < loadedAreas.length; i++) {
			// console.log( "i", i );
			for (let j = 0; j < themepark.attractionInfo.length; j++) {
				// console.log( "j", j );
				if (themepark.attractionInfo[j].area_id === loadedAreas[i].id) {
					// timeReturn.push(loadedAreas[i].name);
					themepark.attractionInfo[j].area_name = loadedAreas[i].name;
				}
			}
		}

		return themepark.loadTypes();

	}).then
	((loadedTypes) => {
		// console.log( "loadedTypes", loadedTypes );

		for (let i = 0; i < loadedTypes.length; i++) {

			for (let j = 0; j < themepark.attractionInfo.length; j++) {
				if (themepark.attractionInfo[j].type_id === loadedTypes[i].id) {

					themepark.attractionInfo[j].attraction_type = loadedTypes[i].name;
				}
			}
		}
	});


module.exports = themepark;






