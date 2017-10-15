parsedWidth = screen.width-17;


function bodysize() {
if (screen.width <= 1200)
	document.getElementById('body').style.width = '1200px';
else
	document.getElementById('body').style.width = parsedWidth+'px';
}


function bodysizemainpage() {

bodysize()

if (screen.width <= 1200)
	{
	document.getElementById('slider').style.width = '1200px';
	document.getElementById('slider').style.height = '289px';
	document.getElementById('slider-area').style.width = '1200px';
	document.getElementById('slider-area').style.height = '289px';
	}
else
	{
	document.getElementById('slider').style.width = parsedWidth+'px';
	document.getElementById('slider').style.height = parsedWidth/1680*405+'px';
	document.getElementById('slider-area').style.width = parsedWidth+'px';
	document.getElementById('slider-area').style.height = parsedWidth/1680*405+'px';
	}

}

