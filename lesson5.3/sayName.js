//sayName(children) - Pasha: my name is Pasha

function sayName(children) {
  for (var i = 1; i<children.length; i++) {
    console.log (children[i] +": my name is " + children[i])
  }
}
var fff = ['Pasha', 'Masha', 'Petya', 'Vasya', 'Yula']
sayName(fff)
