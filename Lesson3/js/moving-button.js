(function(){

	var yesBtn = document.getElementById('yesBtn');
	var noBtn = document.getElementById('noBtn');
	noBtn.style.position = 'absolute';
	

	yesBtn.addEventListener('click', function(event){
		alert('Good decision!');
	});

	noBtn.addEventListener('mouseover', function(event){
		
		var newPosition = calculatePosition();
		var newX = newPosition.x;
		var newY = newPosition.y;

		while(newX > document.documentElement.clientWidth - noBtn.offsetWidth
			|| newY > document.documentElement.clientHeight - noBtn.offsetHeight){
			newPosition = calculatePosition();
			newX = newPosition.x;
			newY = newPosition.y;
		}

		noBtn.style.top = newY + 'px';
		noBtn.style.left = newX + 'px';
	});

	function calculatePosition(){
		var randomX = Math.random();
		var randomY = Math.random();

		return {
			x: document.documentElement.clientWidth * randomX,
			y: document.documentElement.clientHeight * randomY
		}
	}

	noBtn.addEventListener('click', function(event){
		alert('crafty scumbager');
	});

}());