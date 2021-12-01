/*
Thanks for using Replit for Advent of Code!

Here are a few tips:

1. To install packages, just import them and Replit will install them for you, or click on the cube in the sidebar to install manually.
2. If you're stuck, try using the debugger in the sidebar shaped like a play/pause button.
3. When you're done, you can share your project by clicking the project name and then "Publish"
3.a When you share your project, use the #adventofcode hashtag!

4. Have fun, and good luck!
*/
const fs = require('fs')

/*
Place your question data into the data.txt file.
You may need to parse the data!
*/
const data = fs.readFileSync('data.txt', 'utf8')
console.time("Elapsed time")

const dataArray = data.split('\n').map(value => +value)

console.log(dataArray)

const totalIncreased = dataArray.reduce((amountIncreased, currentValue, currentIndex, array) => amountIncreased += currentValue > array[currentIndex - 1] ? 1 : 0, 0)

console.log(totalIncreased);

const sum = (a, b, c) => a + b + c;

const getSlidingWindow = (index, array) => {
  const a = array[index - 2];
  const b = array[index - 1];
  const c = array[index];
  if (!a || !b || !c) return undefined;
  return sum(a, b, c);
}

const slidingWindowIncrease = dataArray.reduce((amountIncreased, currentValue, currentIndex, array) => {
  const currentSlidingWindow = getSlidingWindow(currentIndex, array);
  const previousSlidingWindow = getSlidingWindow(currentIndex - 1, array);
  console.log(currentSlidingWindow, previousSlidingWindow)
  if (!currentSlidingWindow || !previousSlidingWindow) return amountIncreased;
  return amountIncreased += currentSlidingWindow > previousSlidingWindow ? 1 : 0;
}, 0);

console.log(slidingWindowIncrease);

// Keep this line at the end of your code
console.timeEnd('Elapsed time');
