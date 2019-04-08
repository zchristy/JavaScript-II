// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function timer() {
  let time = 0;
    function timing(){
      time++;
      return time;
    }
    return timing;
}

const increment = timer();
const t1 = increment();
const t2 = increment();
const t3 = increment();
const t4 = increment();

console.log(`${t1} ... ${t2} ... ${t3} ... ${t4} ...`);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  function counting(){
    count++;
    return count;
  }
  return counting;
};

const newCounter = counter();
const c1 = newCounter();
const c2 = newCounter();

console.log(c1, c2);

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  const obj = {
    // `increment` should increment a counter variable in closure scope and return it.
    increment() {
      let count = 0;
      function counting() {
        count++;
        return count;
      }
      return counting;
    },
    // `decrement` should decrement the counter variable and return it.
    decrement() {
      let count = 0;
      function counting() {
        count--;
        return count;
      }
      return counting;
    }
  }
  return obj;
};

console.log(counterFactory());
