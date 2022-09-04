var p = document.getElementById("b");
var img = document.getElementsByTagName("img")[0];
var i = 0;
var score = 0;
var h4 = document.getElementsByTagName("h4");

img.setAttribute('draggable', false);

img.addEventListener("mousedown", function() {
	p.style.fontSize = "40px";
	var interval = setInterval(function() {
		score = Math.floor(++i / 10) + "." + i % 10;
		p.innerHTML = score;
	}, 100);
	
	document.addEventListener("mouseup", function() {
		clearInterval(interval);
		img.removeEventListener("mouseup", arguments.callee);
		img.style.display = "none";
		p.innerHTML = "Your score: " + score + "s";
		p.style.marginTop = "90px";
		p.style.fontSize = "90px";
		p.style.color = "blue";
		h4[0].innerHTML = "Try again?";
	});
});

h4[0].addEventListener("click", function() {
	location.reload();
});