var possibilityUsed = false;
var validServerLetter;
var points = 0;
var pointsIncrementer = 10;

gemefield.addEventListener("keydown", function(event){
	console.log(event.keyCode);
	
	// backspace OR delete buttons 
	if(possibilityUsed || event.keyCode === 8 || event.keyCode === 46){
		event.preventDefault();
	} else {
		var input = String.fromCharCode(event.keyCode);
		isLetter = /^[a-z]$/i.test(input);
		
		if(isLetter){
			var span = document.createElement('span');
			span.innerHTML = input;

			if(input.toLocaleLowerCase() === validServerLetter) {
				span.classList.add('valid');
				points += pointsIncrementer;
				result.innerHTML = points;
			} else {
				span.classList.add('error');
			}

			currentResDiv.appendChild(span);
			possibilityUsed = true;
		}
	}
});

var connection = new WebSocket("ws://localhost:8080");

connection.onopen = function(){
	console.log("Connected via websocket");
	connection.send('start');
}

connection.onmessage = function(message){
	console.log(message.data);
	currentLetter.innerHTML = message.data;
	validServerLetter = message.data;
	possibilityUsed = false;
}

connection.onclose = function(){
	currentLetter.innerHTML = '';
}

