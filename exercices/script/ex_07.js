window.onload = function () {
	let triangle = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1];
	let pause = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[1];
	let stop = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[3];
	let mute = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[5];
	let musique = new Audio ('http://54.37.157.128/song.ogg');
    var context = triangle.getContext('2d');
    var volume = true;
        if(!context)
        {
            return;
        }
       
       		context.strokeStyle = 'white';
	       	context.beginPath();
			context.moveTo(6, 6);
			context.lineTo(14, 10);
			context.lineTo(6, 14);
			context.lineTo(6, 6);
			context.stroke();
			context.lineWidth = "1";
			context.closePath();

	triangle.onclick = function() {
		musique.play();
	 }	
	 pause.onclick = function() {
	 	musique.pause();
	 }
	 stop.onclick = function() {
	 	musique.load();
	 }
	 mute.onclick = function () {
	 	if(volume == true) {
	 		musique.volume = 0;
	 		volume = false;
	 	}
	 	else if (volume == false) {
	 		musique.volume = 1;
	 		volume = true;
	 	} 
	 }
}

