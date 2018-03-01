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

console.log(addElementToBeginningOfArray(chocolateBars, "enkyeong park"));
console.log(chocolateBars);
console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, "kim"));
console.log(chocolateBars);

function addElementToEndOfArray(array, element){
   var otherarray = array.push(element);
   return otherarray;
}

function destructivelyAddElementToEndOfArray(array, element){
   array = array.push(element);
   return array;
}

console.log(addElementToEndOfArray(chocolateBars, "Han"));
console.log(chocolateBars);
console.log(destructivelyAddElementToEndOfArray(chocolateBars, "Lee"));
console.log(chocolateBars);


function accessElementInArray(array, index){
   return array[index];
}

console.log(accessElementInArray(chocolateBars, 3));













