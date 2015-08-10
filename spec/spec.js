var code = require('../js/main.js');

// Problem 1
// Write a function that takes three random numbers from 0 to 100 and returns the largest one.

describe('Problem 1', function() {
  it('should return the largest number', function() {
    expect(code.largestNumber([10, 20, 30])).toEqual(30);
    expect(code.largestNumber([1, 20, 3])).toEqual(20);
    expect(code.largestNumber([-1, -20, -3])).not.toEqual(-20);
  });
});

// Problem 2
// Write a function that takes a random number from 0 to 100 as an argument and returns all the odd numbers from 40 to that random number in an array. If the number is smaller than output the number.

describe('Problem 2', function() {
  it('should return all odd numbers from 40-n in an array', function() {
    expect(code.oddNumbers(50)).toEqual([41, 43, 45, 47, 49]);
    expect(code.oddNumbers(45)).toEqual([41, 43, 45]);
    expect(code.oddNumbers(55)).toEqual([41, 43, 45, 47, 49, 51, 53, 55]);
  });

  it('should return the number if less than 40', function() {
    expect(code.oddNumbers(33)).toEqual(33);
    expect(code.oddNumbers(5)).toEqual(5);
    expect(code.oddNumbers(-6)).toEqual(-6);
  });
});

//Problem 3
// Write a function that takes a random number from 0 to 100 as an argument and returns all the even numbers from 0 to the randomized number in an array.
describe('Problem 3', function() {
  it('should return all evens from 0-num', function() {
    expect(code.evenNumbers(5)).toEqual([0, 2, 4]);
    expect(code.evenNumbers(14)).toEqual([0, 2, 4, 6, 8, 10, 12, 14]);
    expect(code.evenNumbers(10)).toEqual([0, 2, 4, 6, 8, 10]);
  });
});


//Problem 4
// Write a function that takes a random number from 0 to 100 as an argument and returns the all the odd numbers from 40 to that random number in an array. If the number is smaller than 40, return all the numbers down to the randomized one in an array - i.e., if the number is 37, you should return [40, 39, 38, 37].

describe('Problem 4', function() {
  it('should return all odds from 40-num', function() {
      expect(code.oddsLess(50)).toEqual([41, 43, 45, 47, 49]);
    expect(code.oddsLess(45)).toEqual([41, 43, 45]);
    expect(code.oddsLess(55)).toEqual([41, 43, 45, 47, 49, 51, 53, 55]);
  });
   it('should return all from num-40', function() {
    expect(code.oddsLess(37)).toEqual([40, 39, 38, 37]);
    expect(code.oddsLess(30)).toEqual([40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30]);
    expect(code.oddsLess(35)).toEqual([40, 39, 38, 37, 36, 35]);
  });
});

//Problem 5
// Write a function that takes a random number from 0 to 10,000 as an argument and returns the sum of its digits. For instance, if the randomized number is 1049, the function should return 14.

describe('Problem 5', function() {
  it('should return sum of all digits', function() {
      expect(code.sumDigits(6999)).toEqual(33);
    expect(code.sumDigits(9999)).toEqual(36);
    expect(code.sumDigits(145)).toEqual(10);
  });
});


//Problem 6
// Write a function that takes a random number from 0 to 10,0000 as an argument and calculates the sum of its digits repeatedly as long as the sum is a single digit. Return that number. For instance, if the randomized number is 1049, the function should return 5.

describe('Problem 6', function() {
  it('should return sum of all digits', function() {
    expect(code.sumSingleDigits(6999)).toEqual(6);
    expect(code.sumSingleDigits(9999)).toEqual(9);
    expect(code.sumSingleDigits(145)).toEqual(5);
  });
});


//Problem 7
// Write a function that takes two random numbers from 0 to 100 as arguments and returns the smaller number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one, simply return "Sorry!".

describe('Problem 7', function() {
  it('should return least common factor', function() {
    expect(code.leastCommonFactor(9, 6)).toEqual(3);
    expect(code.leastCommonFactor(50, 5)).toEqual(5);
    expect(code.leastCommonFactor(11, 6)).toEqual("Sorry!");
  });
});

//Problem 8
// Write a function that takes two random numbers from 0 to 100 as arguments and returns their least common multiple of them.

describe('Problem 8', function() {
  it('should return least common multiple', function() {
    expect(code.leastCommonMultiple(9, 6)).toEqual(18);
    expect(code.leastCommonMultiple(50, 5)).toEqual(50);
    expect(code.leastCommonMultiple(11, 6)).toEqual(66);
  });
});


// //Problem 9
// // Write a function that takes two randomized numbers as arguments and returns their average and standard deviation.

describe('Problem 9', function() {
  it('should return average and standard deviation', function() {
    expect(code.averageStD(9, 6)).toEqual([7.5, 3]);
    expect(code.averageStD(50, 5)).toEqual([27.5, 45]);
    expect(code.averageStD(11, 6)).toEqual([8.5, 5]);
  });
});

