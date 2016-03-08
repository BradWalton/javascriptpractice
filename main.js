//noinspection JSUnresolvedFunction
/**
 * Created by Brad on 2016-03-06.
 */

$(document).ready( function() {

    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        var clockDiv = document.getElementById('clock');

        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + "";

        if (seconds < 10) {
            seconds = "0" + seconds;
        };
    }

    displayTime();

    setInterval(displayTime, 1000);

});