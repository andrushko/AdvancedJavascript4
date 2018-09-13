var tictactoe = (function(){
	// '-' - no changes
	// 'x' - 'x' player
	// 'o' - 'o' player

	var playerX = 'x';
	var playerY = 'o';
	var game, gameStatus, currentPlayer;

	initGame();

	var currentPlayer = playerX;


	function btnClick(event, arrId) {
		if(gameStatus === 'active' && game[arrId] === '-') {

			game[arrId] = currentPlayer;
			event.target.value = currentPlayer;

			var win = checkWin(currentPlayer);
			if(win) {
				gameStatus = currentPlayer + ' win!';
				playerMove.innerHTML = "<em>Player " + gameStatus + "</em>";
				gameResult.hidden = false;
			} else if(!~game.indexOf('-')){
				gameStatus = 'Draw!';
				playerMove.innerHTML = "<em>" + gameStatus + "</em>";
				gameResult.hidden = false;
			} else {
				switchPlayer();
				buildPlayerStatusText();
				showArray();
			}
		}
	}

	function initGame() {
		game = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
		var buttons = document.querySelectorAll("input[type='button']");
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].value = ' ';
		}
		gameStatus = 'active';
		currentPlayer = playerX;
		gameResult.hidden = true;
		buildPlayerStatusText();
	}

	function switchPlayer(){
		if(currentPlayer === playerX) {
			currentPlayer = playerY;
		} else {
			currentPlayer = playerX;
		}
	}

	function checkWin(sign) {
		var winHorizontal = game[0] === sign && game[1] === sign && game[2] === sign
						||	game[3] === sign && game[4] === sign && game[5] === sign
						||	game[6] === sign && game[7] === sign && game[8] === sign;

		var winVertical =   game[0] === sign && game[3] === sign && game[6] === sign
						||	game[1] === sign && game[4] === sign && game[7] === sign
						||	game[2] === sign && game[5] === sign && game[8] === sign;

		var winDiagonal =   game[0] === sign && game[4] === sign && game[8] === sign
						||	game[2] === sign && game[4] === sign && game[6] === sign;

		return winHorizontal || winVertical || winDiagonal;
	}



	function buildPlayerStatusText(){
		playerMove.innerHTML = "Player '" + currentPlayer + "' turn!";
	}

	playAgain.addEventListener('click', initGame);

	function showArray(){
		console.log(game[0], game[1], game[2]);
		console.log(game[3], game[4], game[5]);
		console.log(game[6], game[7], game[8]);
	}

	return {
		btnClick: btnClick
	}
}());