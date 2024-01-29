// defining all the values to be used later
const welcomeq = prompt(
  "Hey there stranger! I have a challenge, but first let me ask are your arms stronger or your legs?"
);
const letsgo = "Alrighty! Let's even them out a bit by doing ";
const wrkt = " pushups it is 💪🏼";
const wrkt2 = " squats it is 🦵🏼";
const motivate = " You can do it! 🏋🏼";
const numbers = [20, 30, 40, 50];
// using Math.random to give me a random number of workout repetition
const randno = Math.floor(Math.random() * numbers.length);
// using if and alert in order to get different exercise depending on the answer
if (welcomeq === "arms") alert(`${wrkt2}`);
else alert(`${wrkt}`);
console.log(letsgo + numbers[randno] + motivate);
