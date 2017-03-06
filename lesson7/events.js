var rectangles = document.getElementsByClassName('rectangle');
// rectangle.onclick = function() {
//   console.log('Ura');
// }
for (var i=0; i<rectangles.length; i++) {
  rectangles[i].onclick = function(e) {
    if (e.target.classList.contains('blue')) {
      e.target.classList.add('yellow');
      e.target.classList.remove('blue');
    }
    else {
      e.target.classList.add('blue');
      e.target.classList.remove('yellow');
    }
  }
}

var wrapper = document.getElementById('wrap');
wrapper.onclick = function() {
  console.log('wrap');
}

rectangles[0].addEventListener('click', function(event) {
  console.log(1);
  event.stopPropagation();
})
