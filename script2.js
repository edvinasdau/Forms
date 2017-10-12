function fiz() {
	document.getElementById("im").style.display = "none";
	document.getElementById("fiz").style.display = "block";
}

function im() {
	document.getElementById("im").style.display = "block";
	document.getElementById("fiz").style.display = "none";
}

cb_pw = document.getElementById("account");

cb_pw.addEventListener("change", function(){
	if (cb_pw.checked) {
		document.getElementById("pw").style.display = "block";
		document.getElementById("pwr").style.display = "block";
	} else {
		document.getElementById("pw").style.display = "none";
		document.getElementById("pwr").style.display = "none";
	}
})

function namai() {
	document.getElementById("pristatymas").style.display = "none";
}

function kitu() {
	document.getElementById("pristatymas").style.display = "block";
}


 input_email = document.getElementById("myEmail");
 input_email.addEventListener("keyup", function(){
var status = false;     
var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
     if (document.myform.email.value.search(emailRegEx) == -1) {
          console.log("Please enter a valid email address."); //reiketu pasidaryti kad tikrintu emaila kai paspaudziamas mygtukas registracijai
     }  else {
          //alert("Woohoo!  The email address is in the correct format and they are the same.");
          status = true;
     }
     return status;  
})