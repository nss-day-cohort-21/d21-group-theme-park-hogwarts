"use strict";

function getSearchInput () {
    $.ajax({
        url: "https://theme-park-19828.firebaseio.com/attractions.json"
    }).done(function(attractionData){
        var searchedAttractions = attractionData.filter(compareSearchResults);
        console.log("searchedAttractions", searchedAttractions);
        areasToHighlight(searchedAttractions);
    });

}

var variableInput;

$(document).keypress(function(e) {
    if (e.which === 13){
        $(".clickArea").removeClass("border");
      if ($("#openMap").val() === "Mischief Managed") {
          variableInput = $("#search").val();
          getSearchInput();

      } else {
          window.alert("You must open the map!");
      }
    }
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
