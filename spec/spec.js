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


//Problem 5
// Write a function that takes a random number from 0 to 10,000 as an argument and returns the sum of its digits. For instance, if the randomized number is 1049, the function should return 14.

//Problem 6
// Write a function that takes a random number from 0 to 10,0000 as an argument and calculates the sum of its digits repeatedly as long as the sum is a single digit. Return that number. For instance, if the randomized number is 1049, the function should return 5.

//Problem 7
// Write a function that takes two random numbers from 0 to 100 as arguments and returns the smaller number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one, simply return "Sorry!".


//Problem 8
// Write a function that takes two random numbers from 0 to 100 as arguments and returns their least common multiple of them.

//Problem 9
// Write a function that takes two randomized numbers as arguments and returns their average and standard deviation.
