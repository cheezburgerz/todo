var person = {
	name: 'Timmy',
	age: 21
}

function updatePerson (obj) {
	obj.age = 24
}

updatePerson(person)
console.log(person);

//array example
var grades = [15, 37]

function addGrades (grades) {
	grades.push(55) 
	debugger;
}

addGrades(grades)
console.log(grades)