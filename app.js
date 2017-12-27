/*
(x - 65 + n)%26 + 65; // x: numero ascii - n: valor fijo
charCodeAt() ingresar posicion y lo devuelve en acsii
'A'.charCodeAt(0) // 65
String.fromCharCode(72) // 'H' **** ingresa el acsii y devuelve la letra*
*/
 function principal(option){
	do{
		var respuesta = prompt("Indique el número de la función a realizar: 1)Cifrar - 2)Descifrar");
		if(respuesta != ""){
			if(respuesta == "1") {
				cipher();
			} else if (respuesta == "2") {
				decipher();
			} else {
				alert("Ingrese una opción válida");
			}
		}
	} while (respuesta == "" || (respuesta != "1" && respuesta != "2"));
}

	
	
function cipher(){
	var textOriginal = prompt('Ingrese una frase a cifrar');
var letter = '';
//var espacio = / /;
if(!isNaN(textOriginal)){//primero verifica si se ingresa numero o si la variable esta vacia
	alert('Debe ingresar letras!');
}

	else if(textOriginal === textOriginal.toUpperCase()){//determina si la cadena esta en mayuscula

		for(var i = 0; i< textOriginal.length;i++){//itera letra por letra la frase
			/*if(espacio.test(textOriginal.charAt(i))){//determina si una experesion regular existe en la iteracion
				letter += textOriginal.charAt(i);//si existe que la mantenga
			}*/
			var numeroAcsii = textOriginal.charCodeAt([i]);//muestra a cada letra su valor en ascii
			var result = (numeroAcsii - 65 + 33)%26 + 65;//ejecuta la formula del codigo cesar
			var textoCifrado  = String.fromCharCode(result);//el valor ascii lo cambia a letra

			letter += textoCifrado;//cada letra la va concatenando a la nueva variable
			
		}
		document.write('Su palabra cifrada es: <strong>'+ letter +'</strong>');//muestra la frase cifrada
	}else{
		for(var i = 0; i< textOriginal.length;i++){//itera letra por letra la frase
			/*if(espacio.test(textOriginal.charAt(i))){//determina si una experesion regular existe en la iteracion
				letter += textOriginal.charAt(i);//si existe que la mantenga
			}*/
			var numeroAcsii = textOriginal.charCodeAt([i]);//muestra a cada letra su valor en ascii
			var result = (numeroAcsii - 97 + 33)%26 + 97;//ejecuta la formula del codigo cesar
			var textoCifrado  = String.fromCharCode(result);//el valor ascii lo cambia a letra

			letter += textoCifrado.toLowerCase();//cada letra la va concatenando a la nueva variable
		}
		document.write('Su palabra cifrada es: <strong>'+ letter +'</strong>');//muestra la frase cifrada
	}


//llamo a la funcion con la variable que se creo en el prompt

}


	
function decipher(){
	var textCifrado = prompt('Ingrese una frase a descifrar');
var letter = '';
//var espacio = / /;

if(!isNaN(textCifrado)|| textCifrado.length < 0){//primero verifica si se ingresa numero o si la variable esta vacia
	alert('Debe ingresar letras!');
}
	else if(textCifrado === textCifrado.toUpperCase()){//determina si la cadena esta en mayuscula

		for(var i = 0; i< textCifrado.length;i++){//itera letra por letra la frase
			/*if(espacio.test(textCifrado.charAt(i))){//determina si una experesion regular existe en la iteracion
				letter += textCifrado.charAt(i);//si existe que la mantenga
			}*/
			var numeroAcsii = textCifrado.charCodeAt([i]);//muestra a cada letra su valor en ascii
			var result = (numeroAcsii + 65 - 33)%26 + 65;//ejecuta la formula del codigo cesar
			var textoCifrado  = String.fromCharCode(result);//el valor ascii lo cambia a letra

			letter += textoCifrado;//cada letra la va concatenando a la nueva variable
		}
		document.write('Su palabra descifrada es: <strong>'+ letter +'</strong>');//muestra la frase cifrada
	}else{
		for(var i = 0; i< textCifrado.length;i++){//itera letra por letra la frase
			/*if(espacio.test(textCifrado.charAt(i))){//determina si una experesion regular existe en la iteracion
				letter += textCifrado.charAt(i);//si existe que la mantenga
			}*/
			var numeroAcsii = textCifrado.charCodeAt([i]);//muestra a cada letra su valor en ascii
			var result = (numeroAcsii + 85 - 33)%26 + 97;//ejecuta la formula del codigo cesar
			var textoCifrado  = String.fromCharCode(result);//el valor ascii lo cambia a letra

			letter += textoCifrado.toLowerCase();//cada letra la va concatenando a la nueva variable
		}
		document.write('Su palabra descifrada es: <strong>'+ letter +'</strong>');//muestra la frase cifrada
}


}
principal();
