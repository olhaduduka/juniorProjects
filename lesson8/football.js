var circle = document.getElementsByClassName('circle')[0];
circle.onclick = function() {
  circle.style.left = circle.style.left.substring(0,2) - 5;
}
circle.oncontextmenu = function() {
  circle.style.left = circle.style.left.substring(0,2) + 5;
}
