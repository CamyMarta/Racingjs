window.onload =function () {
	let i = 16;
	let plus = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1];
	let moins = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[3];
	let choix = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[5];
	
	plus.onclick = function() {
			i++;
	document.body.style.fontSize = i + "px";
	}
	moins.onclick = function() {
		i--;
	document.body.style.fontSize = i + "px";
	}
	choix.onchange = function() {
	document.body.style.backgroundColor = choix.value;
	} 	
}