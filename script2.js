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

// rb_pristn = document.getElementById("namo");
// rb_pristk = document.getElementById("kitur");

// rb_pristn.addEventListener("change", function(){
// 	if (rb_pristn.checked) {
// 		document.getElementById("pristatymas").style.display = "block";
// 	} else {
// 		document.getElementById("pristatymas").style.display = "none";
// 	}

// 	if (rb_pristk.checked) { 
// 		document.getElementById("pristatymas").style.display = "none";
// 	}	
// })