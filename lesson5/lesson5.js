// var isNoseRed = true;
//if (isNoseRed === true){
//	for (var i=0; i<10; i++) {
//		console.log("Nose is red " + i);
//		if (1) {
//		}
//	}
//}

// var studentNames = ["Alex", "Olya", "Masya", "Pet"];
// for (var i=0; i<4; i++) {
//	console.log("Student name is " + studentNames[i]);
//}

var alex = {
	name: "Alex",
	surname: "Duduka",
	sex: "M",
	age: 19,
	married: true,
	role: "Dad",
	sayHi: function(toWhome) {
		return "Hi, " + toWhome + ". I am Alex";
	}
}

var olya = {
	name: "Olya",
	surname: "Duduka",
	sex: "W",
	age: 20,
	married: true,
	role: "Mommy",
}

var masya = {
	name: "Olya",
	surname: "Duduka",
	sex: "W",
	age: 3,
	married: false,
	role: "Daughter",
}

var family = [alex, olya, masya];
console.log("In our family, there are " + family.length + " members");
for (var i=0; i<family.length; i++) {
	var alexNamNam = "Nam-nam" + i
	debugger
	console.log(family[i].name + " is " + family[i].role);
}

function readBook (bookName) {
	console.log(alex.sex);
	console.log(book);
	var book = "Book";
	console.log(book);
	console.log("I read " + bookName);
}

console.log(alexNamNam);
// console.log(book);

readBook("Biblia");
// console.log(book);
