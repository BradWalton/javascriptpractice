/**
 * Created by Brad on 2016-03-06.
 */

$(document).ready(function() {

    function displayTime() {
        var currentTime = new Date()
        var hours = currentTime.getHours()
        var minutes = currentTime.getMinutes()
        var seconds = currentTime.getSeconds()
        var clockDiv = document.getElementById()

        clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
    }

    displayTime();

});
