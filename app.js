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
}

createBoard();