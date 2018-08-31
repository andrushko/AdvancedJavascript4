function replaceElements(cssSelector, tagName, attrs){

	var targetElements = document.querySelectorAll(cssSelector);

	for (var i = 0; i < targetElements.length; i++) {
		var current = targetElements[i];
		var newElement = document.createElement(tagName);

		for (var j = 0; j < current.childNodes.length; j++) {
			newElement.appendChild(current.childNodes[j].cloneNode(true));
		}

		for (var j = 0; j < current.attributes.length; j++) {
			newElement.setAttribute(current.attributes[i].nodeName, 
				current.attributes[i].nodeValue);
		}

		for (var j = 0; j < attrs.length; j++) {
			newElement.setAttribute(attrs[j].key, 
				attrs[j].value);
		}

		current.parentElement.replaceChild(newElement, current);
	}
}