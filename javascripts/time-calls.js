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

console.log( "themepark.attractionInfo", themepark.attractionInfo );

module.exports = themepark;






