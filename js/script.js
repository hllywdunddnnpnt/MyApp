
var widthX, heightX
var widthZ, heightZ

getScreenRes(0);
getBrowserRes(0);



function loadFunc(dis)
	{
		ResizeButton();
		ResizeAudio();
	}

function getScreenRes(dis)
	{
		widthX = screen.width;
		heightX = screen.height;
		if (dis == 1)
			{
				display = widthX + " x " + heightX;
				alert(display);
			}
	}
	
function getBrowserRes(dis)
	{
		widthZ = window.innerWidth;
		heightZ = window.innerHeight;
		if (dis == 1)
			{
				display = widthZ + " x " + heightZ;
				alert(display);
			}
	}
	
function ResizeButton()
	{
		document.getElementById('Shit').style.color = "red";
		document.getElementById('Shit').style.width = (widthZ-15) + "px";
	}
	
function ResizeAudio()
	{
		document.getElementById('Audio1').style.width = (widthZ-15) + "px";
	}