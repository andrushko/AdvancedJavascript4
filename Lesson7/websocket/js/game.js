var currentLetter = document.getElementById('currentLetter');
var gemefield = document.getElementById('gemefield');
var currentResDiv = document.getElementById('currentResDiv');
var result = document.getElementById('result');

var canUserGuessLetter = false;
var letterToGuess;
var userPoints = 0, 
	pointsIncrementer = 10;

var conn = new WebSocket('ws://localhost:8080');
conn.onopen = function(){
	console.log('connection over websocket was established!')
};
conn.onmessage = function(e){
	currentLetter.innerHTML = e.data;
	letterToGuess = e.data;
	canUserGuessLetter = true;
};

var startBtn = document.getElementById("startGame");
startBtn.addEventListener('click', function(event){
	conn.send(true);
});

gemefield.addEventListener('keydown', function(event){
	var input = String.fromCharCode(event.keyCode).toLowerCase();
	var isLetter = /^[a-z]$/i.test(input);

	if(canUserGuessLetter && isLetter) {
		canUserGuessLetter = false;
		var span = document.createElement('span');
		span.innerHTML = input;
		if(input === letterToGuess){
			span.classList.add("valid");
			result.innerHTML = userPoints;
		} else {
			span.classList.add("error");
			userPoints += pointsIncrementer;
		}
		currentResDiv.appendChild(span);
	} else {
		event.preventDefault();
	}

});
