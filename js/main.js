//Problem 1
function largestNumber(arr){
  var largest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

//Problem 2
function oddNumbers(num){
  if(num >= 40){
    var answerArray = [];
    for (var i = 40; i <= num; i++) {
      if (i % 2 !== 0){
        answerArray.push(i);
      }
    }
    return answerArray;
  }else{
    return num;
  }
}

//Problem 3
function evenNumbers(num){
  var answerArray = [];
  for (var i = 0; i <= num; i++) {
    if (i % 2 === 0){
      answerArray.push(i);
    }
  }
  return answerArray;
}

//Problem 4
function oddsLess(num){
  if(num >= 40){
    var answerArray = [];
    for (var i = 40; i <= num; i++) {
      if (i % 2 !== 0){
        answerArray.push(i);
      }
    }
  return answerArray;
  }else{
    var lessArray = [];
    for (var j = 40; j >=0; j--) {
      if(j >= num){
        lessArray.push(j);
      }
    }
    return lessArray;
  }
}

//Problem 5
function sumDigits(num){
  var array = num.toString().split("");
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    var digit = parseFloat(array[i]);
    total += digit;
  }
  return total;
}

//Problem 6
function sumSingleDigits(num){
  var array = num.toString().split("");
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    var digit = parseFloat(array[i]);
    if(total + digit < 10){
    total += digit;
    }
  }
  return total;
}

//Problem 7
function leastCommonFactor(num1, num2){
  var lcm = [];
  for (var i = 2; i <100; i++) {
    if(num1 % i === 0 && num2 % i === 0){
      lcm.push(i);
    }
  }
  if (lcm.length === 0){
      return "Sorry!";
    }
  else{
  var factor = 100;
  for (var j = 0; j < lcm.length; j++) {
    if(lcm[j] < factor){
      factor = lcm[j];
    }
    return factor;
    }
  }
}

//Problem 8
function leastCommonMultiple(num1, num2){
  var num1Multiples = [];
  var num2Multiples = [];
  for (var i = 1; i < 100; i++) {
    num1Multiples.push(num1 * i);
  for (var j = 1; j < 100; j++) {
    num2Multiples.push(num2 * j);
    }
  }for (var k = 0; k < num1Multiples.length; k++) {
    for (var l = 0; l < num2Multiples.length; l++) {
      if(num1Multiples[k] === num2Multiples[l]){
        return num1Multiples[k];
      }
    }
  }
}

//Problem 9
function averageStD(num1, num2){
  var average = (num1 + num2) / 2;
  var StD = num1 - num2;
  if (StD < 0) {
    StD = StD * -1;
  }
  return [average, StD];
}

module.exports = {
  largestNumber: largestNumber,
  oddNumbers: oddNumbers,
  evenNumbers: evenNumbers,
  oddsLess: oddsLess,
  sumDigits: sumDigits,
  sumSingleDigits: sumSingleDigits,
  leastCommonFactor: leastCommonFactor,
  leastCommonMultiple: leastCommonMultiple,
  averageStD: averageStD
};
