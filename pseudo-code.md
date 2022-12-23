- VALUES = [rock, paper, scissors]
- get input from user
- get value from computer

- in player:computer pairs 
- IF playerSelection == computerSelection THEN "Tie", increase both playerScore and computerScore
- IF [0:2, 1:0, 2:1] THEN player wins, increase playerScore
- ELSE computer wins, increase computerScore

- IF playerScore or computer score == 5 THEN check they are equal or not
- IF equal THEN "game is tie"
- ELSE IF playerScore is greater than computerScore THAN 'player wins the game'
- ELSE 'computer wins the game'

- If click any of three button start play round and pick related value as player selection
- display player selection and player score AND computer selection and computer score
- When computer or player reaches score 5 THEN announce winner and show running score

- IF player score or computer score reach to 5 THEN announce the winner or tie and remove event listeners

- IF player clicks Restart button reload the page and refresh scores

- round results:
- IF player wins the round show green color. MESSAGE: You Win! ... beats ...!
- IF computer wins the round show red color. MESSAGE: YOu Lose! ... beats ...!
- IF game is tie THEN show blue color. MESSAGE:Tie Game
- update notification div with the relevant mesage after playRound