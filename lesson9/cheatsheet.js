// THIS IS YOUR CHEATSHEET.

var ourCircle = document.getElementById('circleID');
ourCircle.onclick = function() {
  console.log('You clicked on a circle!');
}

var ourSquare = document.getElementsByClassName('square')[0];
ourSquare.onmouseenter = function() {
  console.log('You entered square!');
}

ourSquare.onmouseleave = function() {
  console.log('You leave square!');
}

var rectangles = document.getElementsByClassName('rectangle');
for (var i = 0; i < rectangles.length; i++) {
  var currentRectangle = rectangles[i]
  currentRectangle.onmouseover = function(event) {
    console.log('You hold the mouse over ' + event.currentTarget.getAttribute('data-name'));
  }
}

var allButtonsOnScreen = document.getElementsByTagName('button');
var blueButton = allButtonsOnScreen[0];
var yellowButton = allButtonsOnScreen[1];
var wrap = document.getElementsByClassName('wrapper')[0];

blueButton.onclick = function() {
  var newDiv = document.createElement('div');
  newDiv.classList.add('blue');
  newDiv.classList.add('circle');
  wrap.appendChild(newDiv)
}

yellowButton.onclick = function() {
  var newDiv = document.createElement('div');
  newDiv.classList.add('yellow');
  newDiv.classList.add('circle');
  wrap.appendChild(newDiv)
}

// There are also some drag`n`drop events: onmousedown/onmousemove/onmouseup
// There are also some input events: onfocus/onblur, onsubmit, etc.
