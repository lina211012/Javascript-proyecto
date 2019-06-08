var calculadora = {

	pantalla: document.getElementById("display"),
	valorpantalla: "0",
	operacion: "",
	num: 0,
	numa: 0,
	numb: 0,
	resultado: 0,
	signoneg: 0,


// MODIFICANDO BOTONES
	init: (function(){
		this.EventoPresionaBoton(".tecla");
		this.asignarFuncionBoton();
	}),


	EventoPresionaBoton: function(selector){
		var x = document.querySelectorAll(selector);
		for (var i = 0; i<x.length;i++) {
			x[i].onclick = this.eventoclickBoton;
			x[i].onmouseleave = this.eventoUnclickBoton;
		};
	},

	eventoclickBoton: function(event){
		calculadora.presionaTecla(event.target);
	},

	eventoUnclickBoton: function(event){
		calculadora.sueltaTecla(event.target);
	},



	presionaTecla: function(tecla){
		var x = tecla.id;
		if (x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto" ) {
			tecla.style.width = "28%";
			tecla.style.height = "62px";
		} else if(x=="mas") {
			tecla.style.width = "88%";
			tecla.style.height = "98%";
		} else {
			tecla.style.width = "21%";
			tecla.style.height = "62px";
		}
	},

	sueltaTecla: function(tecla){
		var x = tecla.id;
		if (x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto" ) {
			tecla.style.width = "29%";
			tecla.style.height = "62.91px";
		} else if(x=="mas") {
			tecla.style.width = "90%";
			tecla.style.height = "100%";
		} else {
			tecla.style.width = "22%";
			tecla.style.height = "62.91px";
		}
	},


	asignarFuncionBoton: function(){

   // MOSTRAR NUMEROS EN PANTALLA

   var uno = document.getElementById('1').addEventListener("click", function(){
     if (display.innerHTML =="0") {
       display.innerHTML="";
     }else if (display.innerHTML.length >= 8) {
     }else {
       display.innerHTML += "1"
     }
   });

   var dos = document.getElementById('2').addEventListener("click", function(){
     if (display.innerHTML =="0") {
       display.innerHTML ="";
     }else if (display.innerHTML.length >=8) {
     }else{
       display.innerHTML += "2"
     }
   });

   var tres = document.getElementById('3').addEventListener("click", function(){
     if (display.innerHTML =="0") {
       display.innerHTML ="";
     }else if (display.innerHTML.length >=8) {
     }else{
       display.innerHTML += "3"
     }
   });

   var cuatro = document.getElementById('4').addEventListener("click", function(){
     if (display.innerHTML =="0") {
       display.innerHTML ="";
     }else if (display.innerHTML.length >=8) {
     }else{
       display.innerHTML += "4"
     }
   });

   var cinco = document.getElementById('5').addEventListener("click", function(){
     if (display.innerHTML =="0") {
       display.innerHTML ="";
     }else if (display.innerHTML.length >=8) {
     }else{
       display.innerHTML += "5"
     }
   });

   var seis = document.getElementById('6').addEventListener("click", function(){
     if (display.innerHTML =="0") {
       display.innerHTML ="";
     }else if (display.innerHTML.length >=8) {
     }else{
       display.innerHTML += "6"
     }
   });

   var siete = document.getElementById('7').addEventListener("click", function(){
     if (display.innerHTML =="0") {
       display.innerHTML ="";
     }else if (display.innerHTML.length >=8) {
     }else{
       display.innerHTML += "7"
     }
   });

   var ocho = document.getElementById('8').addEventListener("click", function(){
     if (display.innerHTML =="0") {
       display.innerHTML ="";
     }else if (display.innerHTML.length >=8) {
     }else{
       display.innerHTML += "8"
     }
   });

   var nueve = document.getElementById('9').addEventListener("click", function(){
     if (display.innerHTML =="0") {
       display.innerHTML ="";
     }else if (display.innerHTML.length >=8) {
     }else{
       display.innerHTML += "9"
     }
   });

   var cero = document.getElementById('0').addEventListener("click", function(){
     if (display.innerHTML =="0") {
       display.innerHTML ="";
     }else if (display.innerHTML.length >=8) {
     }else{
       display.innerHTML += "0"
     }
   });

   // DAR FUNCION A LOS DEMAS BOTONES

  var reset = document.getElementById('on').addEventListener("click", function(){
    display.innerHTML = "0"
  });

  var signonegativo = document.getElementById('sign').addEventListener("click", function(){

		var string_numero = display.innerHTML;
    var numa = parseInt(string_numero);
		var result="";

		if (display.innerHTML !=="0") {
			result = ((numa) *(-1));
		}else if (display.innerHTML.length >=8) {
		} else {
			display.innerHTML += "";
		}

		display.innerHTML = result;
  });

  var suma = document.getElementById('mas').addEventListener("click", function(){
    numa = display.innerHTML;
    operacion = "+";
    display.innerHTML = "";
  });

  var resta = document.getElementById('menos').addEventListener("click", function(){
    numa = display.innerHTML;
    operacion = "-";
    display.innerHTML = "";
  });

  var multiplicacion = document.getElementById('por').addEventListener("click", function(){
    numa = display.innerHTML;
    operacion = "*";
    display.innerHTML = "";
  });

  var division = document.getElementById('dividido').addEventListener("click", function(){
    numa = display.innerHTML;
    operacion = "/";
    display.innerHTML = "";
  });

  var igual = document.getElementById('igual').addEventListener("click", function(){
     numb = display.innerHTML;
        if(operacion == "+"){
        resultado = parseFloat(numa) + parseFloat(numb);
        }
        if(operacion == "-"){
        resultado = parseFloat(numa) - parseFloat(numb);
        }
        if(operacion == "*"){
        resultado = parseFloat(numa) * parseFloat(numb);
        }
        if(operacion == "/"){
        resultado = parseFloat(numa) / parseFloat(numb);
        }
        display.innerHTML = String(resultado).substr(0,8);
  });

	var punto = document.getElementById('punto').addEventListener("click", function(){
	punto = display.innerHTML + ".";
	pantalla = document.getElementById("display").innerHTML;
	if(display.innerHTML!="0"){
	if (pantalla.indexOf('.') > -1);
	else{
	display.innerHTML = display.innerHTML + ".";
	}
	}
	else{
	display.innerHTML = "";
	}
	});

	},

	updatepantalla: function(){
		this.pantalla.innerHTML = this.valorpantalla;
  }

};

calculadora.init();
