let aurevoir = function() {
	a = 0;
	document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].onclick = function() { 
		a++;
		this.innerHTML = a;
	};
	

}
window.onload = aurevoir;
