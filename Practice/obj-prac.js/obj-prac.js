let loaf = {
	flour: 300,
	water: 210,
	hydration: function() {
		return this.water / this.flour * 100;
	}
}

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration())

const obj1 = {
	foo: 1,
	bar: 2,
	fum: 3,
	quux: 4,
	spam: 5
}

const keys = Object.keys(obj1);

for (let i in obj1) {
	console.log(`${i}: ${obj1[i]}`);
}

const obj2 = {
	meals: [
	'breakfast', 
	'second breakfast',
	'elevenses',
	'lunch',
	'afternoon tea',
	'dinner',
	'supper'
	]
}

console.log(obj2.meals[3])


const obj3 = {
	name: 'jon',
	jobTitle: 'Electrician',
	boss: 'Jim'
}

const obj4 = {
	name: 'Jim',
	jobTitle: 'auditor'
}

const obj5 = {
	name: 'Daniel',
	jobTitle: 'roofer',
	boss: 'Jim'
}

const arr = [obj3, obj4, obj5];

for (let i =0; i < arr.length; i++) {
	if (!arr[i].boss) {
		console.log(`${arr[i].jobTitle} ${arr[i].name} doesn't report to anybody`);
	} else {
		console.log(`${arr[i].jobTitle} ${arr[i].name} reports to ${arr[i].boss}`);
	}
}

const message = 'craft block argon meter bells brown croon droop';

const cipher = {
	a: this[2],
	b: this[3],
	c: this[4],
	d: this[5]
}

const arrMsg = message.split(' ');
console.log(arrMsg);
for (let i = 0; i < arrMsg.length; i++) {

}
