"use strict";

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
        }
    });
});