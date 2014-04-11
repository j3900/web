
constructTagQueryLinks();

function constructTagQueryLinks() {
	var tags = document.getElementsByClassName('tag');
	
	for(var i = 0; i < tags.length; i++) {
		var name = tags[i].innerHTML.subString(1);
		var url = '../tagquery.html';
		tags[i].href = url;
	}
}