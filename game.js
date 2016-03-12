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
var ball = new Ball(200, 300);

window.onload = function() {
    document.body.appendChild(canvas);
    animate(step);
};

var step = function() {
    update();
    render();
    animate(step);
};

var render = function() {
    context.fillStyle = "#81F7F3";
    context.fillRect(0, 0, width, height);
    ball.render();
};

var update = function() {
};

//Making the Rocket

function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.x_speed = 0;
    this.y_speed = 3;
    this.radius = 5;
}

Ball.prototype.render = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
    context.fillStyle = "#000000";
    context.fill();
};