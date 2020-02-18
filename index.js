// alert("First JavaScript line!!!")
// document.getElementById("img-caption").addEventListener('ondblclick', document.getElementById("img-caption").innerHTML='Hello JavaScript!');
// document.getElementById("img-caption").innerHTML = "Hello";

var cap = document.getElementById("img-caption");
var footer = document.getElementById("footer");

cap.addEventListener('click', capFun);
footer.addEventListener('mouseover',showFoot);
footer.addEventListener('mouseout', hideFoot);
footer.addEventListener('click', toProfile);

function capFun() {
    this.innerHTML = "Hello JavaScript!";
}

function showFoot() {
    footer.style.opacity = 1;
}

function hideFoot() {
	this.style.opacity = .75;
}

function toProfile() {
	window.location='http://github.com/dabrentmeister/tribute';
}

