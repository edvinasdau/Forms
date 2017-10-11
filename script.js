cb_veg = document.getElementById("cb_veg");
cb_sriubos = document.getElementById("sriubos");
div_sriubos = document.getElementById("div_sriubos");
cb_salotos = document.getElementById("salotos");
div_salotos = document.getElementById("div_salotos");
div_antri = document.getElementById("div_antri");
cb_koser = document.getElementById("cb_koser");
cb_gliuten = document.getElementById("cb_gliuten");

cb_veg.addEventListener("change",function(){

	var sriubu_sarasas = document.getElementById("sriubu_sarasas").options;
	var salotu_sarasas = document.getElementById("salotu_sarasas").options;

	if(cb_veg.checked){
		//pasalinti nevegetariskas sriubas
		for(var i = 0; i < sriubu_sarasas.length ; i++) {
			
			if(sriubu_sarasas[i].getAttribute("veg") == "false"){
				sriubu_sarasas[i].style.display ="none";

				if(sriubu_sarasas.selectedIndex == i){
					alert("Ne vegetariskas");
				}

			} else {
				var selected = false;
				if (!selected){
					sriubu_sarasas[i].setAttribute("selected", "true");	
					selected = true	;
				}
				
			}
		}
		
	} else {
		//grazinti visas sriubas
		for(var i = 0; i < sriubu_sarasas.length ; i++) {
			sriubu_sarasas[i].style.display ="block";
		}
	}


	if(cb_veg.checked){
		//pasalinti nevegetariskas salotas
		for(var i = 0; i < salotu_sarasas.length ; i++) {

			if(salotu_sarasas[i].getAttribute("veg") == "false"){
				salotu_sarasas[i].style.display ="none";

				if(sriubu_sarasas.selectedIndex == i){
					alert("Ne vegetariskas");
				}

			} else {
				var selected = false;
				if (!selected){
					salotu_sarasas[i].setAttribute("selected", "true");	
					selected = true	;
				}
			}
		}
		
	} else {
		//grazinti visas salotas
		for(var i = 0; i < salotu_sarasas.length ; i++) {
			salotu_sarasas[i].style.display ="block";
		}
	}
});



cb_sriubos.addEventListener("change", function(){

	if (cb_sriubos.checked){
		div_sriubos.style.display = 'block';    //rodyti
	}	else {
		 div_sriubos.style.display = 'none';    //nerodyti
		}

});

cb_salotos.addEventListener("change", function(){

	if (cb_salotos.checked){
		div_salotos.style.display = 'block';    //rodyti
	}	else {
		 div_salotos.style.display = 'none';    //nerodyti
		}

});




cb_koser.addEventListener("change",function(){
	var antru_sarasas = document.getElementById("antru_sarasas").options;

	if(cb_koser.checked){
		//pasalinti nevegetariskas sriubas
		for(var i = 0; i < antru_sarasas.length ; i++) {
			
			if(antru_sarasas[i].getAttribute("koser") == "false"){
				antru_sarasas[i].style.display ="none";

				if(antru_sarasas.selectedIndex == i){
					alert("Ne koserinis");
				}

			} else {
				var selected = false;
				if (!selected){
					antru_sarasas[i].setAttribute("selected", "true");	
					selected = true	;
				}				
			}
		}
		
	} else {
		//grazinti visas sriubas
		for(var i = 0; i < antru_sarasas.length ; i++) {
			antru_sarasas[i].style.display ="block";
		}
	}
});


cb_gliuten.addEventListener("change",function(){
	var antru_sarasas = document.getElementById("antru_sarasas").options;

	if(cb_gliuten.checked){
		//pasalinti nevegetariskas sriubas
		for(var i = 0; i < antru_sarasas.length ; i++) {
			
			if(antru_sarasas[i].getAttribute("gliuten") == "false"){
				antru_sarasas[i].style.display ="none";

				if(antru_sarasas.selectedIndex == i){
					alert("Su gliutenu");
				}

			} else {
				var selected = false;
				if (!selected){
					antru_sarasas[i].setAttribute("selected", "true");	
					selected = true	;
				}				
			}
		}
		
	} else {
		//grazinti visas sriubas
		for(var i = 0; i < antru_sarasas.length ; i++) {
			antru_sarasas[i].style.display ="block";
		}
	}
});

antras_sarasas = document.getElementById("antras_sarasas").options;

cb_koser.addEventListener("change", check_ap);
cb_gliuten.addEventListener("change", check_ap);

// function check_ap (){

// 	for (var i = antras_sarasas.length-1; i >= 0; i--) {
// 		if(cb.gliuten.checked && antras_sarasas[i].getAttribute("gliuten") == "true") {
// 			antras_sarasas[i].style.display = "block";
// 		} else {
// 			antras_sarasas[i].style.display = "none";
// 		}
// 	}
// }