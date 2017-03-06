var circle = document.getElementsByClassName("circle");
for (var i=0; i<circle.length; i++) {
  circle[i].onclick = function(a) {
    if (a.target.classList.contains("green")) {
      a.target.classList.add("red");
      a.target.classList.remove("green");
    }
    esle {
      a.target.classList.add("green");
      a.target.classList.remove("red");
    }
  }
}

var wrapper = document.getElementById("wrap");
wrapper.onclick = function() {
  console.log("wrap");
}
