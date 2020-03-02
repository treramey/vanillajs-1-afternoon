const board = [];
let gameIsWon = false;

function play(clickedId) {
  let playerSpan = document.getElementById("player");
  let clickedElement = document.getElementById(clickedId);
  console.log(gameIsWon)

  if (playerSpan.innerText === "X" && board[clickedId] === undefined &&gameIsWon === false) {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else if(board[clickedId] === undefined && gameIsWon === false){
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
  }

  console.log(board);

  let tl = board[0];
  let tm = board[1];
  let tr = board[2];
  let ml = board[3];
  let mm = board[4];
  let mr = board[5];
  let bl = board[6];
  let bm = board[7];
  let br = board[8];

  // top row horizontal filled check
  if (tl !== undefined && tl === tm && tl === tr) {
    gameIsWon = true;
    alert(`${tl} is the winner!`);
    return 
  }

  // middle row horizontal check
  if (ml !== undefined && ml === mm && ml === mr) {
    gameIsWon = true;
    alert(`${ml} is the winner!`);
    return 
  }

  //bottom row horizontal check
  if (bl !== undefined && bl === bm && bl === br) {
    gameIsWon = true;
    alert(`${bl} is the winner!`);
    return
  }

  // left colunm check
  if (tl !== undefined && tl === ml && tl === bl) {
    gameIsWon = true;
    alert(`${tl} is the winner!`);
    return 
  }

  // middle colunm check
  if (tm !== undefined && tm === mm && tm === bm) {
    gameIsWon = true;
    alert(`${tm} is the winner!`);
    return 
  }

  // right colunm check
  if (tr !== undefined && tr === mr && tr === br) {
    gameIsWon = true;
    alert(`${tr} is the winner!`);
    return 
  }

  // left to right diagonal line check
  if (tl !== undefined && tl === mm && tl === br) {
    gameIsWon = true;
    alert(`${tl} is the winner!`);
    return 
  }

  // right to left  diagonal line check
  if (tr !== undefined && tr === mm && tr === bl) {
    gameIsWon = true;
    alert(`${tr} is the winner!`);
    return 
  }

  let boardFull = true;
  for (let i = 0; i < 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("It's a Cats game , TIE !");
  }
}

function resetGame() {
    return window.location.reload()
}
