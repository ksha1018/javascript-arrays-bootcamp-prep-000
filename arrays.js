var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
chocolateBars.push("david kwon");
chocolateBars.unshift("goowan kwon");
chocolateBars =["sohyeon kwon", ...chocolateBars];
console.log(chocolateBars);


function addElementToBeginningOfArray(array, element){
   var otherarray = array.unshift(element);
   return otherarray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
   array = array.unshift(element);
   return array;
}

addElementToBeginningOfArray(chocolateBars, "enkyeong park");
console.log(chocolateBars);
destructivelyAddElementToBeginningOfArray(chocolateBars, "kim");
console.log(chocolateBars);

function addElementToEndOfArray(array, element){
   var otherarray = array.push(element);
   return otherarray;
}

function destructivelyAddElementToEndOfArray(array, element){
   array = array.push(element);
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

















