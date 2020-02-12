// alert("First JavaScript line!!!")
// document.getElementById("img-caption").addEventListener('ondblclick', document.getElementById("img-caption").innerHTML='Hello JavaScript!');
// document.getElementById("img-caption").innerHTML = "Hello";
var cap = document.getElementById("img-caption");
cap.addEventListener('click', capFun);
function capFun() {
    this.innerHTML = "Hello JavaScript!";
}