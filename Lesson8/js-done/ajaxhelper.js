var aj = (function(){

	return {
		get: get
	}

	function get(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", url);

		xhr.onreadystatechange = function(res){
			if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
				callback(JSON.parse(xhr.responseText));
			}
		}
		xhr.send();
	}

}());