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
