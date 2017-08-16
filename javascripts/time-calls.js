"use strict";

console.log( "datacalls.js" );

$(document).ready(function() {


function loadTime() {
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

}

function loadAreas() {
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
}

function loadTypes() {
	return new Promise(function(resolve, reject) {

		let getTypes = new XMLHttpRequest();
		getTypes.open('GET', 'https://theme-park-19828.firebaseio.com/attraction_types.json');
		getTypes.send();
		getTypes.addEventListener("load", (event) => {
			let types = JSON.parse(event.target.responseText);
			console.log( "types", types );
			resolve(types);
		});
	});
}



let timeReturn = [];

let regex = /([^1][2]:)([0-5][0-9][p])\w+/ig;

console.log( "timeReturn", timeReturn );

loadTime()
.then(
	(timeData) => {

		timeData.forEach((item)=> {
			if (regex.test(item.times)) {
				timeReturn.push(item);
			}
				
		});
		return loadAreas();

	}).then
	((loadedAreas) => {
		console.log( "loaded", loadedAreas );

		for (let i = 0; i < loadedAreas.length; i++) {
			// console.log( "i", i );
			for (let j = 0; j < timeReturn.length; j++) {
				// console.log( "j", j );
				if (timeReturn[j].area_id === loadedAreas[i].id) {
					// timeReturn.push(loadedAreas[i].name);
					timeReturn[j].area_name = loadedAreas[i].name;
				}
			}
		}

		return loadTypes();

	}).then
	((loadedTypes) => {
		console.log( "loadedTypes", loadedTypes );

		for (let i = 0; i < loadedTypes.length; i++) {

			for (let j = 0; j < timeReturn.length; j++) {
				if (timeReturn[j].type_id === loadedTypes[i].id) {

					timeReturn[j].attraction_type = loadedTypes[i].name;
				}
			}
		}
	});

		// timeReturn.forEach((object) => {
		// 	// console.log( "object", object.area_id );
		// 	// if (object.area_id === loadedAreas.id) {
		// 	// 	console.log( "yes" );
		// 	// }

		// 	});
		// });


			// loadedAreas.forEach((area) => {
			// 	let areaId = area.id;
			// 	let areaName = area.id;

			// 	console.log( "object.name", object.name );


		// areas.forEach(item) => {
		// 	console.log( "item", item );
		// }
		// loadedAreas.forEach(item) => {

		// }
		// for (let i = 0; i < loadedAreas.length; i++) {
		// 	console.log( "test" );
		// }

// let areaReturn = [];
// console.log( "areaReturn", areaReturn );

// 		$.ajax({
// 			url: 'https://theme-park-19828.firebaseio.com/areas.json'
// 		})
// 		.done(function(results) {
// 			// console.log(results);
// 			results.forEach((item) => {

// 				areaReturn.push(item);
				
// 			});

// 		})
// 		.fail(function() {
// 			console.log("error");
// 	});


});  //END DOCUMENT READY




		// 	for (let i = 0; i < timeReturn.length; i++) {

		// 	for (let j = 0; j < loadedAreas.length; j++) {
		// 		if (timeReturn[i].area_id === loadedAreas[j].id) {
		// 			console.log( "loadedAreas.name", loadedAreas[j].name );
		// 			// timeReturn[i].area_name = loadedAreas[j].name;
					
		// 		}
		// 	}
		// }








