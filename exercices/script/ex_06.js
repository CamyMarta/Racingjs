window.onload = function () {
	let chemin = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];

	let Hero = class {
		constructor(amadeus, mage, inteligence, force) {
			this.amadeus = amadeus;
			this.mage = mage;
			this.inteligence = inteligence;
			this.force = force;
		}
		toString() {	
			let stringss = this.amadeus.substring(0, 1);
			let stringsss = this.amadeus.substring(1, 8);
			let maj = stringss.toUpperCase();
			chemin.innerHTML += " Je suis " + maj + stringsss + " le " + this.mage + ", j'ai " + this.inteligence + " point d'inteligence et " + this.force + " points de force !<br />"
		}

	}
	var mage = new Hero("amadeus", "mage", 10, 3);
	 var guerrier = new Hero ("pontius", "guerrier", 3, 10);
	mage.toString();
	guerrier.toString();
}
 