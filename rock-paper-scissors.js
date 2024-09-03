let score = JSON.parse(localStorage.getItem('score'));  
if(score === null){
  score = {
    wins : 0 ,
    loses : 0 ,
    ties : 0 ,
  };
}
     
  document.querySelector(`.js-score`)
    .innerHTML = ` Wins: ${score.wins} , losses: ${score.loses} , Ties: ${score.ties}`;


    function playGame(playerMove){
      const computerMove = PickComputerMove();

let result = '';
      if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
      result = 'you lose';
    }
      else if (computerMove === 'paper'){
        result = 'you win';
      } 
      else if( computerMove === 'scissors'){
        result = 'tie';
      }
    }
 
  else if(playerMove === 'rock'){
        if(computerMove === 'rock'){
      result = 'tie';
    }
      else if (computerMove === 'paper'){
        result = 'you lose';
      } 
      else if( computerMove === 'scissors'){
        result = 'you win';
      }
    }

    else if(playerMove === 'paper'){
          if(computerMove === 'rock'){
        result = 'you win';
      }
        else if (computerMove === 'paper'){
          result = 'tie';
        } 
        else if( computerMove === 'scissors'){
          result = 'you lose';
        }
      }

      if(result === `you win`){
          score.wins += 1;
      }
      else if(result === `you lose`){
          score.loses += 1;
      }
      else if(result === `tie`){
        score.ties += 1;
      }
        
      localStorage.setItem('score',JSON.stringify(score));

      updateScore();
       
        document.querySelector('.js-result').
        innerHTML = result;

        document.querySelector('.js-move').
        innerHTML = ` You 
  <img src="${playerMove}-emoji.png" class="rocky">
  <img src="${computerMove}-emoji.png" class="rocky">
  Computer`;
  
    }

          function updateScore(){
            document.querySelector(`.js-score`)
    .innerHTML = `wins: ${score.wins} , loses: ${score.loses} , Ties: ${score.ties}`;

          }
      function PickComputerMove(){
        const randomNumber = Math.random();
        let computerMove = '';
  if (randomNumber>=0 && randomNumber <1/3){
    computerMove = 'rock';
  }
  else if (randomNumber>=1/3 && randomNumber < 2/3){
      computerMove = 'paper';
  }
  else if (randomNumber >= 2/3 && randomNumber < 1){
      computerMove = 'scissors';
  } 
  return computerMove;
}

/* function greet(name1){
console.log(`hello `, name1);
if(name1 === undefined){
  console.log(`hi there`);
}
}
greet()*/