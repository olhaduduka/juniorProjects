var sasha = {
  name: 'Sasha',
  age: 18,
  sayHi: function(toWhom) {
    console.log('Hi, ' + toWhom + '!' + ' I am ' + this.age);
  },
  myNameIs: myNameIs,
}

var olya = {
  name: 'Olya',
  age: 16,
  sayHi: sasha.sayHi,
  myNameIs: myNameIs,
  vegetables: {
    potato: 10,
    apple: 4,
  }
}

function myNameIs() {
  var a = 10;
  console.log(a);
}

class Animal {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
  }

  sayName() {
    console.log(this.name);
  }
}

class Rabbit extends Animal {
  constructor(props) {
    super({name: props.name, age: props.age})
    this.sex = props.sex
  }

  run() {
    console.log('I am running!');
  }
}

class Cherepacha extends Animal {
  constructor(props) {
    super({name: props.name, age: props.age})
    this.speed = props.speed
  }

  sayAge() {
    console.log(this.age);
  }

  saySlowerPlease() {
    if (this.speed > 6) {
      console.log('Slower, please');
    }
    else {
      console.log('Yuhuuu!');
    }
  }
}

var properties = {name: 'Krola', age: 2, sex: 'W'};
var rabb = new Rabbit(properties);
rabb.sayName()
rabb.run()

var cherepacha1 = new Cherepacha({name: 'Cherepacha', age: 100, speed: 5})
cherepacha1.sayAge()
cherepacha1.sayName()
cherepacha1.saySlowerPlease()

var cherepacha2 = new Cherepacha({name: 'Cherepacha2', age: 200, speed: 10})
cherepacha2.sayAge()
cherepacha2.sayName()
cherepacha2.saySlowerPlease()
