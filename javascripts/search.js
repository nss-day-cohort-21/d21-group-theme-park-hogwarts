"use strict";

function getSearchInput () {
    $.ajax({
        url: "https://theme-park-19828.firebaseio.com/attractions.json"
    }).done(function(attractionData){
        // console.log(attractionData);
        let firstResult = attractionData.filter(compareSearchResults);
        console.log(firstResult);
    });

}

var variableInput;

$(document).keypress(function(e) {
    if (e.which === 13) {
        variableInput = $("#search").val()
        getSearchInput()
        console.log(variableInput)
    }
});


var searchResultAttractionArray = [];

function compareSearchResults (attraction) {
    var attractionName = attraction.name ;
    var expToSearch = new RegExp(variableInput, "i");
    if (attractionName.search(expToSearch) != -1){
        searchResultAttractionArray.push(attraction);
        console.log(searchResultAttractionArray);
        return searchResultAttractionArray;
    }

}
