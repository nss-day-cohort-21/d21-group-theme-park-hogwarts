"use strict";

let themepark = require("./time-calls.js");

let regexHolder = 
                    {
                        "9 AM": /([^1][9]:)([0-5][0-9][a])/ig,
                        "10 AM": /([1][0]:)([0-5][0-9][a])/ig,
                        "11 AM": /([1][1]:)([0-5][0-9][a])/ig,
                        "12 PM": /([1][2]:)([0-5][0-9][p])/ig,
                        "1 PM": /([^1][1]:)([0-5][0-9][p])/ig,
                        "2 PM": /([^1][2]:)([0-5][0-9][p])/ig,
                        "3 PM": /([^1][3]:)([0-5][0-9][p])/ig,
                        "4 PM": /([^1][4]:)([0-5][0-9][p])/ig,
                        "5 PM": /([^1][5]:)([0-5][0-9][p])/ig,
                        "6 PM": /([^1][6]:)([0-5][0-9][p])/ig,
                        "7 PM": /([^1][7]:)([0-5][0-9][p])/ig,
                        "8 PM": /([^1][8]:)([0-5][0-9][p])/ig,
                        "9 PM": /([^1][9]:)([0-5][0-9][p])/ig
                    };


$(function () {
    console.log("timepicker");
    $('.timepicker').timepicker({
        timeFormat: 'h p',
        interval: 60,
        minTime: '1',
        maxTime: '11:59pm',
        defaultTime: 'now',
        startTime: '9:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true,
        change: function (time) {

            console.log($('.timepicker').val());
            let regex = regexHolder[$('.timepicker').val()];
            console.log( "regex", regex );
            themepark.attractionInfo.length = 0;

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
              console.log( "MUTATED", themepark.attractionInfo );
        }
    });
});

