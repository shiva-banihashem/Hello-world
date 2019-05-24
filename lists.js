let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
console.log(list);

let list2={value: 0, rest: list};
let list3={value: -1, rest: list};
console.log(list2);
console.log(list3);

//Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument
function arrayToList(arrayArg) {
  if (arrayArg) {
      i = arrayArg.length - 1;
      list= {value: arrayArg[i],
                  rest: null};
                 
      for (j=i-1;j>=0;j--) {  
       
     
          list2 = {value: arrayArg[j],
                  rest: list};
                
         list = list2;
         }
     
     console.log(list2);
     return list2;
  }
  else {
      console.log("array is empty");
  }
}
                  

console.log(arrayToList([10, 20,30,40]));

//write a function to convert a list to array

function listToArray(list){
console.log('in function');
  console.log(list); 
arr = [list.value];
  console.log('rest.value'+list.rest.value);
  console.log('rest.rest.value'+list.rest.rest.value);
 console.log('array:'+ arr); 
  list1= list;
while(list1.rest !== null){
    arr.push(list1.rest.value);
   list1.rest = list1.rest.rest;
    console.log('in loop'+ list1.rest);
    
}
console.log('returningarray'+arr);
 return arr;    
}     
      
//console.log(arrayToList([10, 20,30,40]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30,40])));


