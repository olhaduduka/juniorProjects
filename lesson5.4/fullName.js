var people = [];
people[0] = {name: "a", surname: "d"};
people[1] = {name: "o", surname: "d"};

function fullName(people) {
  for (var i = 0; i < people.length; i++) {
    console.log(people[i].name + " " + people[i].surname);
  }
}

fullName(people)


var family = people;
family[0] = "father";
console.log(family[0], family[1]);

var m = {name: "malina"}; // 7 // true
var k = m;
k = "klubnika";
console.log(k, m);
