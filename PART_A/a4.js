function result()
{
	var i = document.getElementById("n1").value;
	if (i==0) {
		document.getElementById("res1").innerHTML = "it is Zero,Any number multiplied with 0 ans: is 0 ";
	}
	else
	{

	var res = i*2;
	document.getElementById("res1").innerHTML = res;
}
}
function result1()
{
	var j = document.getElementById("n1").value;
	if (j==0) {
		document.getElementById("res2").innerHTML = "it is Zero,Any number multiplied with 0 ans: is 0 ";
	}
	else
	{
	
    var ress = j*j;
	document.getElementById("res2").innerHTML = ress;
}
}
