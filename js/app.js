let isGameActive = true;


document.addEventListener('DOMContentLoaded', () => {
   
    let squares = document.querySelectorAll('.grid-container div')
    let playerDisplay = document.querySelector('#player')  
   
    

    

    let currentPlayer = 'Player X'
    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)
    });


    function clickOutcome(e) {
        const squareArray = Array.from(squares)
        const index = squareArray.indexOf(e.target)
        playerDisplay.textContent = "Your turn, " + currentPlayer
        

        if(currentPlayer === 'Player X'){
            squares[index].classList.add('playerO')
            currentPlayer = 'Player O'
        } else {
            currentPlayer = 'Player X'
            squares[index].classList.add('playerX')
        }
    function clickOnce(square) {
        square.target.removeEventlistener('clikc', clickOnece)
    }
        
      
       
        let cellOne = document.querySelector('#one').className;
        let cellTwo = document.querySelector('#two').className;
        let cellThree = document.querySelector('#three').className;
        let cellFour = document.querySelector('#four').className;
        let cellFive = document.querySelector('#five').className;
        let cellSix = document.querySelector('#six').className;
        let cellSeven = document.querySelector('#seven').className;
        let cellEight = document.querySelector('#eight').className;
        let cellNine = document.querySelector('#nine').className;
       
        

        //result 
        if (cellOne === cellTwo && cellTwo === cellThree && cellThree !== 'cell'){
            resultM ("You won! " + currentPlayer) 
        }else if (cellFour === cellFive && cellFive === cellSix && cellSix !== 'cell'){
            resultM ("You won! " + currentPlayer)
        }else if (cellSeven === cellEight && cellEight === cellNine && cellNine !== 'cell'){
            resultM ("You won! " + currentPlayer)
        }else if (cellOne === cellFour&& cellFour === cellSeven && cellSeven !== 'cell'){
            resultM ("You won! " + currentPlayer)
        }else if (cellTwo === cellFive && cellFive === cellEight && cellEight !== 'cell'){
            resultM ("You won! " + currentPlayer)
        }else if (cellThree === cellSix && cellSix === cellNine && cellNine !== 'cell'){
            resultM ("You won! " + currentPlayer)
        }else if (cellOne === cellFive && cellFive === cellNine && cellNine !== 'cell'){
            resultM ("You won! " + currentPlayer)
        }else if (cellThree === cellFive && cellFive === cellSeven && cellSeven !== 'cell'){
            resultM ("You won! " + currentPlayer)
        }else if (cellOne != 'cell' && cellTwo != 'cell' && cellThree != 'cell' && cellFive != 'cell' && cellSix != 'cell' && cellSeven != 'cell' && cellEight != 'cell' && cellNine != 'cell')
            resultM ("It's a tie! play again!") 
      

            function resultM(result){
                let resultText = document.createElement('p');
                resultText.innerText = result;
                document.body.appendChild(resultText);
            }    
    }     
}    
)



    






























