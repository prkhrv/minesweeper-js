const grid = document.querySelector(".grid");
let width = 10;
let squares = [];
let bombAmount = 20;

// Create Board
function createBoard(){

    // BOMBS
    const bombsArray = Array(bombAmount).fill('bomb');
    const emptyArray = Array(width*width - bombAmount).fill('valid');

    const gameArray = [...bombsArray,...emptyArray];
    const shuffledArray = gameArray.sort(()=> Math.random() -0.4);
    console.log(shuffledArray);


    for(let i = 0; i < width*width; i++){
        const square = document.createElement("div");
        square.classList.add(shuffledArray[i]);
        square.setAttribute('id',i);
        grid.appendChild(square);
        squares.push(square);

    }
    
    // add numbers 
    for(let i = 0; i < squares.length ; i++){
        let total = 0 ;
        const isLeftEdge = (i % width === 0);
        const isRightEdge = (i % width === width -1);

      if (squares[i].classList.contains('valid')) {
        if (i > 0 && !isLeftEdge && squares[i -1].classList.contains('bomb')) total ++
        if (i > 9 && !isRightEdge && squares[i +1 -width].classList.contains('bomb')) total ++
        if (i > 10 && squares[i -width].classList.contains('bomb')) total ++
        if (i > 11 && !isLeftEdge && squares[i -1 -width].classList.contains('bomb')) total ++
        if (i < 98 && !isRightEdge && squares[i +1].classList.contains('bomb')) total ++
        if (i < 90 && !isLeftEdge && squares[i -1 +width].classList.contains('bomb')) total ++
        if (i < 88 && !isRightEdge && squares[i +1 +width].classList.contains('bomb')) total ++
        if (i < 89 && squares[i +width].classList.contains('bomb')) total ++
        squares[i].setAttribute('data', total)
      }
    }
}

createBoard();