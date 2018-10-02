(function(){

	var database,
		employeesList = [];


	aj.get("http://localhost:1111/", function(result){
		if(window.indexedDB){
			upcreateDatabase("empldb", result);
		}
	});


	function upcreateDatabase(name, data){
		var openDbRequest = indexedDB.open(name, 7);

		openDbRequest.onupgradeneeded = function(ev) {

			database = ev.target.result;
			if(database.objectStoreNames.contains('employees')){
				database.deleteObjectStore('employees');
			}
			buildObjectStore(data);

			function buildObjectStore(data){
				var emplStore = database.createObjectStore("employees", {keyPath: "id"});
				emplStore.createIndex("email_IDX", "email", { unique: true });
				
				emplStore.transaction.oncomplete = function(event) {
					data.map((x) => {
						database.transaction("employees", "readwrite").objectStore("employees").add(x);

					});
				}
			}
		}
	}
}());