var fruits = ['mandarin', 'passion fruit', 'mango', 'papaya'];
  name: 'Alex',
  surname: 'Duduka',

function fullName(fruits) {
    for (var i = 1; i<fruits.length; i++){
      console.log(fruits[i] + name + surname);
    }
  }

fullName(fruits)
