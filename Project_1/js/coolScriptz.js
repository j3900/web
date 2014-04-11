function tagDisplay(goalTag) {
	var posts = document.getElementsByClassName('post');
	for(var i = 0; i < posts.length; i++) {
		var children = posts[i].childNodes;
		var foundTag = false;
		for(var j = 0; j < children.length; j++) {
			if(children[j].innerHTML == goalTag) {
				foundTag = true;
				break;
			}
		}
		if(!foundTag) {
			posts[i].style.display='none';
		}
	}
	
	var searchResultIndicator = document.getElementById('searchResult');
	searchResultIndicator.innerHTML = 'Displaying posts tagged: '+goalTag+'. Click me to go back.';
}

function refreshPage() {
	location.reload();
}