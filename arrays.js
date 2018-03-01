var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
chocolateBars.push("david kwon");
chocolateBars.unshift("goowan kwon");
chocolateBars =["sohyeon kwon", ...chocolateBars];
console.log(chocolateBars);


function addElementToBeginningOfArray(array, element){
   var array1 = [element, ...array];
   return array1;
}

function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element);
   return array;
}

addElementToBeginningOfArray(chocolateBars, "enkyeong park");
console.log(chocolateBars);
destructivelyAddElementToBeginningOfArray(chocolateBars, "kim");
console.log(chocolateBars);

function addElementToEndOfArray(array, element){
   var array1 = [...array, element];
   return array1;
}

function destructivelyAddElementToEndOfArray(array, element){
   array.push(element);
   return array;
}

addElementToEndOfArray(chocolateBars, "Han");
console.log(chocolateBars);
destructivelyAddElementToEndOfArray(chocolateBars, "Lee");
console.log(chocolateBars);


function accessElementInArray(array, index){
   return array[index];
}

console.log(accessElementInArray(chocolateBars, 3));

function destructivelyRemoveElementFromBeginningOfArray(array){
   var array1 = array.shift();
   return array1;
}

function RemoveElementFromBeginningOfArray(array){
   array = array.slice(1);
   return array;
}

destructivelyRemoveElementFromBeginningOfArray(chocolateBars);
console.log(chocolateBars);
RemoveElementFromBeginningOfArray(chocolateBars);
console.log(chocolateBars);


function destructivelyRemoveElementFromEndOfArray(array){
   var array1 = array.pop();
   return array1;
}

function RemoveElementFromEndOfArray(array){
   array = array.slice(0, array.length-1);
   return array;
}

































