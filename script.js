//ES5 MAP CALLBACK

function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

//ES2015  ARROW FUNCTIONS
const double = (arr) => arr.map((val) => val * 2);

//Q2 Refactor the following function to use arrow functions:
function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}
// ans
const squareAndFindEvens = (numbers) =>
  numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);
