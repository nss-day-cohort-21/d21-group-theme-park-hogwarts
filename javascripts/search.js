"use strict";

function getSearchInput () {
    $.ajax({
        url: "https://theme-park-19828.firebaseio.com/attractions.json"
    }).done(function(attractionData){
        let firstResult = attractionData.filter(compareSearchResults);
        areasToHighlight(firstResult);
    });

}

var variableInput;

$("#searchBtn").click(function (e) {
    gettingItStarted()

});


$(document).keypress(function(e) {
    if (e.which === 13){
        gettingItStarted()
    }

});

function gettingItStarted  () {
    $(".clickArea").removeClass("border");
        if ($("#openMap").val() === "Mischief Managed") {
            variableInput = $("#search").val();
            getSearchInput();

        } else {
            alert("You must open the map!");
    }
}




var searchResultAttractionArray = [];

function compareSearchResults (attraction) {
    var attractionName = attraction.name ;
    var expToSearch = new RegExp(variableInput, "i");
    if (attractionName.search(expToSearch) != -1){
        searchResultAttractionArray.push(attraction);
        return searchResultAttractionArray;
    }

}


function areasToHighlight(firstResult) {
    var arrayAreasToHighlight = [];

    for(var i = 1; i < 8; i++ ){
        var resultObject = firstResult.find(getAttractionId);

        function getAttractionId(theObject) {
            return theObject.area_id === i;
        }

        if (resultObject) {
            arrayAreasToHighlight.push("box--" + resultObject.area_id);
        }
    }
    arrayAreasToHighlight.forEach((value, index) =>  {
            let elementBordered = document.getElementById(value);
            elementBordered.classList.add("border");

        });

}
