(function(){
	var count = 0;
    var ul = document.getElementById("id1");

    if(ul) {
    	var ulChilds = ul.childNodes;

    	for (var i = 0; i < ulChilds.length; i++) {
    		var currentChild = ulChilds[i];

    		if(currentChild.nodeType === Node.COMMENT_NODE
    			&& currentChild.data.trim() === "red"){
    			count++;
    		}
    	}
    }
    console.log("Count of comments with data of 'red' = " + count);
    return count;
}());

(function(){
	var applyColors = function(ulClass){
		var lis = document.querySelectorAll("ul." + ulClass + ' li');

		for (var i = 0; i < lis.length; i++) {
			
			var commentNode = lis[i].previousSibling;

			while(commentNode && commentNode.nodeType !== Node.COMMENT_NODE
				&& commentNode.nodeName !== "LI"){
				commentNode = commentNode.previousSibling;
			}

			if(commentNode && commentNode.nodeName !== "LI"){
				lis[i].style[ulClass === 'foreground' ? 'color'
				: 'backgroundColor'] = commentNode.data.trim();
			}
		}
	}

	applyColors('background');
	applyColors('foreground');
}());