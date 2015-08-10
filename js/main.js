
function largestNumber(arr){
  var largest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

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

function evenNumbers(num){
  var answerArray = [];
  for (var i = 0; i <= num; i++) {
    if (i % 2 === 0){
      answerArray.push(i);
    }
  }
  return answerArray;
}


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


module.exports = {
  largestNumber: largestNumber,
  oddNumbers: oddNumbers,
  evenNumbers: evenNumbers,
  oddsLess: oddsLess
};
