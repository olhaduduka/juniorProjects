var diamond = document.getElementById("diamond"); // red
var circle = document.getElementsByClassName('circle'); // green border
var his = document.getElementsByTagName("h1"); // 50 font-size


diamond.className = "diamond red";
his[0].className = 'hi';
circle[0].classList.add("bgreen");

var span = document.createElement("span");
span.innerText = "I love Alex"
diamond.appendChild(span);

// var rectangles = document.getElementsByTagName('');
// for (var i=0; i<rectangles.length; i++) {
//   rectangles[i].style.width = 50;
// }
//
// var newDiv = document.createElement('div');
// newDiv.className = 'rectangle inline';
// var wrapper = document.getElementById('wrapper-new-rectangle');
// wrapper.appendChild(newDiv);
//
// var div2 = newDiv.cloneNode();
// wrapper.appendChild(div2);
