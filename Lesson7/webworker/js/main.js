(function(){
	var result = document.getElementById('result');

	var worker = new Worker('worker.js')

	worker.onmessage = function(e){
		result.innerHTML = e.data;
	}

	var obj1 = {inpString:'ashdvhagsd', shift:12};
	worker.postMessage(JSON.stringify(obj1));
}());