function feedbackForm() {
	var fname = document.forms["messageForm"]["firstname"].value;
	var lname = document.forms["messageForm"]["lastname"].value;
	var mail = document.forms["messageForm"]["E-mail"].value;
	var gender = document.forms["messageForm"]["gender"].value;
	var message = document.forms["messageForm"]["message"].value;

	if (fname == "" || lname == "" || message == "" || mail==""){
		alert("Empty fields found. Please fill the form.");
	}
	else {
		alert("Thank you for the feedback.");
	}
}
/* this is an external JS */

function change(){
	var element = document.getElementById("title");
	
	if(element.style.color == "green"){
		element.style.color = "blue";
	}else if(element.style.color == "blue"){
		element.style.color = "red";
	}else{
		element.style.color = "green";
	}
}
