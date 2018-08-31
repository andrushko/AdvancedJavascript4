function getAllDescendants(el){
	var allDescendants = [];
    function getDescendants(el) {
        allDescendants.push(el);

        for(var i = 0; i < el.childNodes.length; i++){
            var current = el.childNodes[i];
            if(current.nodeType === Node.ELEMENT_NODE && current.childNodes.length){
                getDescendants(current);
            } else {
                allDescendants.push(current);
            }
        }
    }
	
	getDescendants(el);
	allDescendants.shift();
	return allDescendants;
}

