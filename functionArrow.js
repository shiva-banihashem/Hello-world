
//parameters => expression
// is equivalent to:
//function (parameters){
//  return expression;
// }
function greaterThan(n) {
   
  return m => m > n;                                                   //m is the parameter
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
