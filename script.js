cb_veg = document.getElementById("cb_veg");
cb_sriubos = document.getElementById("sriubos");
div_sriubos = document.getElementById("div_sriubos");
cb_salotos = document.getElementById("salotos");
div_salotos = document.getElementById("div_salotos");


cb_veg.addEventListener("change",function(){

	var sriubu_sarasas = document.getElementById("sriubu_sarasas").options;
	var salotu_sarasas = document.getElementById("salotu_sarasas").options;

	if(cb_veg.checked){
		//pasalinti nevegetariskas sriubas
		for(var i = 0; i < sriubu_sarasas.length ; i++) {
			
			if(sriubu_sarasas[i].getAttribute("veg") == "false"){
				sriubu_sarasas[i].style.display ="none";
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