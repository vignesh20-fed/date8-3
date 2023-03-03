var date = new Date();
var vj=prompt("Enter a number");
date.setMonth(vj);
var b=date.getMonth();
if(b<= 4){
	document.write("this is spring");
	console.log(date);
}
else if (b<= 8){
	document.write("this is summer");
    	console.log(date);	
}
else if (b<= 12){
	document.write("winter");
		console.log(date);
}
	document.write('<br>');	