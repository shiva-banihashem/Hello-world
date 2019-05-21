function power(base, exponent) {
  console.log("beginning"+base +':'+ exponent);
  if (exponent == 0) {
    console.log("exponent is 0");
    return 1;
  } else {
    console.log(base +'and'+ exponent);
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 5));
