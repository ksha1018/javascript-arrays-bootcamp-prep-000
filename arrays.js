var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
chocolateBars.push("david kwon");
chocolateBars.unshift("goowan kwon");
chocolateBarsa =["sohyeon kwon", ...chocolateBars];
console.log(chocolateBarsa);


function addElementToBeginningOfArray(array, element){
   var array1 = array.unshift(element);
   return array1;
}