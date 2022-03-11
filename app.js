let max = parseInt(prompt("Enter the max number!"));
while (!max) {
  max = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * max) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess: "));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too high! Enter a lesser number.");
  } else {
    guess = prompt("Too low. Guess higher.");
  }
}

if (attempts === 1) {
  console.log(`GOT'EM! It only took you ${attempts} try.`);
} else if (guess === "q") {
  console.log("QUITTER!!!");
} else {
  console.log(`GOT'EM! It only took you ${attempts} tries.`);
}
