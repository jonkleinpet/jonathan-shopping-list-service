function repeat(fn, n) {
	for (let i = 0; i < n; i++) {
		fn();
	}
}

function hello() {
	console.log('Hello world');
}

function goodbye() {
	console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);


function filter(arr, fn) {
   const newArray = [];
   for (let i = 0; i < arr.length; i++) {
   	if (fn(arr[i]) === true) {
   		newArray.push(arr[i]);
   	}
   }
   return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCreator(typeOfWarning) {
	let warningCounter = 0;
	return function(location) {
		warningCounter += 1;
		console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`);
		console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"`);
	};
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const iceWarning = hazardWarningCreator('Ice on the Road');
const snowWarning = hazardWarningCreator('Snow on the Road');

rocksWarning('Main St and Pacific Ave');
iceWarning('Sunny St and Fall St');
snowWarning('Alpine Dr and Brook Ave');

iceWarning('Boulder St and Fareway Rd');

/* function createCounter() {
	let runningCount = 0;
	return function(increment = 1) {
		runningCount += increment;
		return runningCount;
	};
}

const counter1 = createCounter();
const counter2 = createCounter(); */

const tArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function removeBackwardsRight(arr) {
	for (let i = 0; i < arr.length; i++)
	let newArray = tArray.filter(function(num) {
		
	});
}

//let forwardLeft = tArray.filter(function(...num) {
	//console.log(num)
	//return num[0] > 0;
//});

//console.log(tArray)
//console.log(forwardLeft);
