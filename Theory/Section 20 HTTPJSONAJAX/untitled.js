// Challenge: timesBy

// Define a function timesBy which takes in a number n as an argument. 
// timesBy should return a function that can take an array of numbers as an argument. 
// The returned function should map over the array and multiply each array value by N.



const timesBy = (N) => {
  function newarr(arr) {
      let result = [];
      result = arr.map(function(x) { 
        return x * N; 
      });
      return result; 
    }
    return newarr;
  };
  
  /*
   * Uncomment the following lines and Run Code to test your work
   */
  const timesBy2 = timesBy(2); 
  const timesBy3 = timesBy(3); 
  timesBy2([1, 3, 5, 7, 9]); // -> [2, 6, 10, 14, 18]
  timesBy3([1, 3, 5, 7, 9]); // -> [3, 9, 15, 21, 27]


