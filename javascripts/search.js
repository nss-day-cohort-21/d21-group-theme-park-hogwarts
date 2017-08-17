"use strict";

let themepark = require("./time-calls");

var variableInput;

$(document).ready(() => {

$(document).keypress(function(e) {
    if (e.which === 13){
        $(".clickArea").removeClass("border");
      if ($("#openMap").val() === "Mischief Managed") {
          variableInput = $("#search").val();
          $('#output').html(`<h4>Search Results: ${variableInput}</h4><br>`);
          
          themepark.loadTime()
            .then((attractionData) => {
                var searchedAttractions = attractionData.filter(compareSearchResults);
                console.log("searchedAttractions", searchedAttractions);
                areasToHighlight(searchedAttractions);
            });

      } else {
          window.alert("You must recite the spell and tap the map with your wand, Muggle!");
      }
    }
});

});

function compareSearchResults(attraction) {
    var attractionName = attraction.name;
    var expToSearch = new RegExp(variableInput, "i");
    if (attractionName.search(expToSearch) != -1){
    return attraction;
    }
}


function areasToHighlight(searchedAttractionsInput) {
    var attractionIdArray = [];
    var arrayAreasToHighlight = [];

    searchedAttractionsInput.forEach((element) => {
        attractionIdArray.push(element.area_id);
    });

    for(var i = 1; i < 8; i++ ) {
        if (attractionIdArray.includes(i)) {
            arrayAreasToHighlight.push("box--" + i);
        }
    }

    console.log("arrayAreasToHighlight", arrayAreasToHighlight);

    arrayAreasToHighlight.forEach((value, index) =>  {
            let elementBordered = document.getElementById(value);
            elementBordered.classList.add("border");

        });
}
