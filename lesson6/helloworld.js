var rectangles = document.getElementsByTagName('');
for (var i=0; i<rectangles.length; i++) {
  rectangles[i].style.width = 50;
}

var newDiv = document.createElement('div');
newDiv.className = 'rectangle inline';
var wrapper = document.getElementById('wrapper-new-rectangle');
wrapper.appendChild(newDiv);

var div2 = newDiv.cloneNode();
wrapper.appendChild(div2);
