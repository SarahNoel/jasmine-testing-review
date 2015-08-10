
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











module.exports = {
  largestNumber: largestNumber,
  oddNumbers: oddNumbers,
  evenNumbers: evenNumbers
};
