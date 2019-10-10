function Add()
{
var i = document.getElementById("a1").value;
var j = document.getElementById("a2").value;
var x = Number(i)+Number(j);
document.getElementById("result").innerHTML = x;
}
function Sub()
{
var i = document.getElementById("a1").value;
var j = document.getElementById("a2").value;
var x = Number(i)-Number(j);
document.getElementById("result").innerHTML = x;
}
function Mul()
{
var i = document.getElementById("a1").value;
var j = document.getElementById("a2").value;
var x = Number(i)*Number(j);
document.getElementById("result").innerHTML = x;
}
function Div()
{
var i = document.getElementById("a1").value;
var j = document.getElementById("a2").value;
if(Number(i)==0)
{
	document.getElementById("result").innerHTML = "its Zero";
}
else if (Number(j)==0) {
	document.getElementById("result").innerHTML = "Cant be divisible By Zero";
}
else
{
var x = Number(i)/Number(j);
document.getElementById("result").innerHTML = x;
}	
}