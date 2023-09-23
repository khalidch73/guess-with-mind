#! /usr/bin/env node
// Import necessary libraries
import inquirer from 'inquirer';
import chalk from 'chalk';
import showBanner from 'node-banner';
import gradient from 'gradient-string';

// Function to start a new game
async function playGame() {
  // Generate a random number between 1 and 10
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;

  await showBanner('Number Guessing Game', gradient.rainbow('Try to guess the secret number between 1 and 10.'));

  while (true) {
    attempts++;
    const answer = await inquirer.prompt({
      type: 'number',
      name: 'guess',
      message: `Attempt #${attempts}: ${chalk.blue('Guess the number')} `,
      validate: (input) => {
        if (isNaN(input) || input < 1 || input > 10) {
          return 'Please enter a valid number between 1 and 10.';
        }
        return true;
      },
    });

    const userGuess = answer.guess;

    if (userGuess === secretNumber) {
      console.log(chalk.green(`Congratulations! You guessed the number ${secretNumber} correctly in ${attempts} attempts!`));
      break;
    } else if (userGuess < secretNumber) {
      console.log(chalk.red('Too low! Try again.'));
    } else {
      console.log(chalk.red('Too high! Try again.'));
    }
  }

  // Ask if the user wants to play again
  const playAgainAnswer = await inquirer.prompt({
    type: 'confirm',
    name: 'playAgain',
    message: 'Do you want to play again?',
  });

  if (playAgainAnswer.playAgain) {
    await playGame(); // Start a new game if the user wants to play again
  } else {
    console.log(gradient.rainbow('Thanks for playing! Goodbye.'));
  }
}

// Start the first game
playGame().catch((error) => {
  console.error(error);
});
