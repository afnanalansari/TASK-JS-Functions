/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  return `hello ${name}`;
}
console.log(greet('afnan'));

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  if (n%2 !== 0){
    return 'odd';
  }else {
    return 'even';
  }
}
console.log(isOdd(7));

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */


function oddsSmallerThan(n) {

  let count = 0;
  let num = 1;

  while(num < n)
  {
    if (num%2 !== 0){
      count++;
    }
    num++;
  }
  return count;
}

console.log(oddsSmallerThan(7));


/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (n%2 !== 0){ //if it is odd
    return Math.pow(n,2);
  }else {
    return n*2;
  }
}
console.log(squareOrDouble(7));
