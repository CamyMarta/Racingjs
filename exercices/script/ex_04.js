// window.onload = function(){
let caractere = " ";
	  document.onkeypress = function()
	{ 
		let evenement = event.key;
		let where =  document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];
		caractere += evenement;
		if(caractere.length >= 42) {
			caractere = caractere.slice(1, 43);
		}
		where.innerHTML = caractere;
	}
// }

