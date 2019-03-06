var links = document.getElementsByTagName ('a');
console.log(links);


for(i=0; i<links.length; i+=1) {
	links[i].onclick = function (event) {
		event.preventDefault();
		console.log(event);
	};
};

