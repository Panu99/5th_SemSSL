function check()
{
	var len = document.getElementById("tex").value;
    var leng = document.getElementById("texx").value;
    var x = len.length;
    var m = leng.length;
    if (x>m) {
    	document.getElementById("re").innerHTML = x;
    	document.getElementById("re").innerHTML = "Sentence A is Greater than B";
    	
    	
    }
    else
    {
    	 document.getElementById("res").innerHTML = m;
    	 document.getElementById("res").innerHTML = "Sentence B is Greater than A";
    }
}
function refreshPage()
{

}

