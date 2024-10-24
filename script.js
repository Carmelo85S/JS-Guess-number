/*
Guess the random number 
Create a function guessNumberGame that generates a random number between 1 and 10. 
The function should repeatedly prompt the user to guess the number until the correct number is guessed. 
Use a while loop to keep asking the user for input until they guess correctly.  
Provide feedback if the guess is too high or too low. 
*/

//Create a function 
function guessNumberGame (){

    //Generate a random number between 1 and 10
    const secretNumber = parseInt(Math.floor(Math.random()*10+1));

    //initialize a variable for guessed number
    let guess;

    //Infinity loop until the condition is true
    while(guess !== secretNumber){

        //Convert string to number
        guess = parseInt(prompt("Guess the secret number: "));

        //Check the condition if the guessed number is equal to secretNumber, if it is, the loop will break and the game is Over
        if(guess === secretNumber){
            console.log("Your guess is right!"); 
            break;

        //If the guessed number is not right, check if the guessed number is grether or lower than secretNumber
        }else{
            console.log("Try again");

            if(guess > secretNumber){
                console.log("Your guessed number is greter than the secret number");
            }else{
                console.log("Your guessed number is lower than the secret number");
            }
        }
    }
}

//Start the game
guessNumberGame();



/*Create an array of random numbers
Create a function generateRandomArray that accepts one argument: length (the length of the array).
Inside the function, use a for loop to generate an array of random numbers between 1 and 100.
Return the array from the function.*/

function generateRandomArray(length) {
    // Initialize an empty array
    const randomNumbers = [];

    for (let i = 0; i < length; i++) {
        // Push a random number between 1 and 100 into the array
        randomNumbers.push(Math.floor(Math.random() * 100) + 1);
    }

    // Return the generated array
    return randomNumbers;
}
//call the function with length of 10
const length = 10;
const randomNumbers = generateRandomArray(length);

// Output the generated random numbers array
console.log(randomNumbers);



/*
Calculate the sum of even numbers in the array 
Create a function sumEvenNumbers that accepts an array as an argument. 
Use a for loop to iterate through the array and calculate the sum of the even numbers. 
Return the sum of the even numbers. 
*/

function sumEvenNumbers(arr) {
    // Initialize a variable to store the sum of even numbers
    let sum = 0;

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is even
        if (arr[i] % 2 === 0) {
            // Add the even number to the sum
            sum += arr[i];
        }
    }
    // Return the sum of even numbers
    return sum;
}

//Initialize array and call the function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumEvenNumbers(numbers));
