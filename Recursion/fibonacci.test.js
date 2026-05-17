/*
  Make a function that computes Fibonacci numbers recursively.

  Fibonacci sequence:
  0, 1, 1, 2, 3, 5, 8...

  Each number is:
  fibonacci(n-1) + fibonacci(n-2)

  Examples:
  fibonacci(1) = 1
  fibonacci(2) = 1
  fibonacci(3) = 2
*/

function fibonacci(n) {

    if(n === 1 || n === 2){
        return 1;
    }

    if(n <= 0){
        return 0;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}


// unit tests
// do not modify the below code
test("fibonacci", () => {
  expect(fibonacci(1)).toEqual(1);
  expect(fibonacci(2)).toEqual(1);
  expect(fibonacci(3)).toEqual(2);
  expect(fibonacci(4)).toEqual(3);
  expect(fibonacci(5)).toEqual(5);
  expect(fibonacci(6)).toEqual(8);
});