// self - worker instance
self.onmessage = function(e){

	//var resultOfCalcs = hardCalculations(e.data);
	self.postMessage(e.data);
}

function hardCalculations(intArg){
		var sum = intArg;
		for (var i = 0; i < 1000; i++) {
			for (var j = 0; j < 2000; j++) {
				for (var k = 0; k < 3000; k++) {
					sum += (i + 1) * (j * k);
				}
			}
		}
		return sum;
	}