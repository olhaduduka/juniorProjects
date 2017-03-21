// обработчик события "нажми на кнопку", которой вызывает функцию
// добавь инф из инпута и рендерлист.
var newList = [
  {name: 'Petya', surname: 'Pupkin'},
  {name: 'Vasya', surname: 'Petrova'},
]

var createButton = document.getElementById("create");
createButton.onclick = function() {
  var name = document.getElementById("name");
  var surname = document.getElementById("surname");
  newList.push({name: name.value, surname: surname.value});
  renderList(newList);
}


function renderList(newList) {
  var userList = document.getElementById("user-list");
  userList.innerHTML = "";
  newList.map(function(li, i) {
   var newLi = document.createElement("li");
   newLi.innerHTML = '<span>' + li.name + ' ' + li.surname + '</span>'
   newLi.innerHTML += '<button class="cross" data-id="'+i+'"> X </button>'
   userList.appendChild(newLi)
  })
   addCrosses(newList)
}

function addCrosses(newList) {
  var cross = document.getElementsByClassName("cross");
  for (var i=0; i<cross.length; i++) {
    cross[i].onclick = function(event){
      let idToRemove = event.currentTarget.getAttribute('data-id');
      newList.splice(idToRemove, 1);
      renderList(newList)
    }
  }
}

renderList(newList)
