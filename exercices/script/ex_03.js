window.onload = function() 
{
	document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].onclick = function salut()
	{
		var value = prompt('Quel est votre nom ?');

		if(value === ('')) 
		{
			salut();
			return value;
		}
		if(value !== null)
		{

			if ( confirm( "Etes vous sûr que " + value + " est votre prenom ?") ) 
			{
		        alert( "Bonjour " + value + " ! ");
		       document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].innerHTML = ("Bonjour " + value + " ! ");
			}
		} 
		    
	}
		
}