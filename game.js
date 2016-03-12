/**
 * Created by Brad on 2016-03-12.
 */

//This will make the game roughly run at 60 fps.

var animate = window.requestAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000/60) };

//Playing field for the game.

var canvas = document.createElement('canvas');
var width = 400;
var height = 650;
canvas.width= width;
canvas.height= height;
var context= canvas.getContext('2d');

window.onload = function() {
    document.body.appendChild(canvas);
    animate(step);
};

window.onload = function() {
    document.body.appendChild(canvas);
    animate(step);
};

var step = function() {
    update();
    render();
    animate(step);
};

var update = function() {
};

var render = function() {
    context.fillRect(0, 0, width, height);
    var y = this.height

    if(y <= 300){
        context.fillStyle = "#81F7F3";
    }
    else{
        context.fillStyle = "black"
    }
};