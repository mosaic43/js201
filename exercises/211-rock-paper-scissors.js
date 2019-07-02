// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

function rockPaperScissors(player1, player2){
   var winner = '';
   if (player1 === 'rock' && player2 === 'scissors') {winner = "player 1"};
   if (player1 === 'rock' && player2 === 'paper') {winner = "player 2"};
   if (player1 === 'rock' && player2 === 'rock') {winner = "draw"};
   if (player1 === 'paper' && player2 === 'scissors') {winner = "player 2"};
   if (player1 === 'paper' && player2 === 'paper') {winner = "draw"};
   if (player1 === 'paper' && player2 === 'rock') {winner = "player 1"};
   if (player1 === 'scissors' && player2 === 'scissors') {winner = "draw"};
   if (player1 === 'scissors' && player2 === 'paper') {winner = "player 1"};
   if (player1 === 'scissors' && player2 === 'rock'){winner = "player 2"};


    return winner 

}

