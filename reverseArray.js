//Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, 
//write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces
//a new array that has the same elements in the inverse order. The second, reverseArrayInPlace,
//does what the reverse method does: it modifies the array given as argument by reversing its elements.
//Neither may use the standard reverse method.
function reverseArray(arraypar) {
  var newarray = [];
  var j=0;
  for(i= arraypar.length-1; i>=0;i--){
     newarray[j]= arraypar[i];
    console.log(arraypar[i]);
    j++;
  }
  console.log(newarray);
  return newarray;
}
 
function reverseArrayInPlace(arrayValue1) {
  var newarray = [];
  var j=0;
  for(i= arrayValue1.length-1; i>=0;i--){
     newarray[j]= arrayValue1[i];
    console.log(arrayValue1[i]);
    j++;
  }
  console.log(newarray);
  arrayValue= newarray;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
