var imgslide = new Array();
	imgslide[0] = new Image();
	imgslide[0].src = "imgs/cat2.jpeg";
	imgslide[1] = new Image();
	imgslide[1].src = "imgs/slide1.jpeg";
  imgslide[2] = new Image();
	imgslide[2].src = "imgs/slide2.jpeg";



var i = 0;

function Slide()
{
	var img = document.getElementById("slide");
	img.src = imgslide[i].src;

	if(i < 2)
	{
		i++;
	}
	else
	{
		i = 0;
	}

	setTimeout("Fade()", 2000);
	setTimeout("Slide()", 4000);
	Reset();
}

function Reset()
{
	var img = document.getElementById("slide");
	var imgstyle = img.style;
	imgstyle.visibility = "visible";
 	imgstyle.opacity = "1";
}
function Fade()
{
	var img = document.getElementById("slide");
	var imgstyle = img.style;

	imgstyle.visibility= "hidden";
	imgstyle.opacity = "0";
	imgstyle.transition = "visibility 0s 2s, opacity 2s linear";
}

Slide()
