/*# Segunda Kata
## Sistema Romano
Vamos a hacer un ejercicio clásico y es jugar con los números romanos y árabes.

Como refresco, vamos a ver sus símbolos y reglas.

#### Símbolos

 Romano | Árabe 
--------|-------
 I | 1 
 V | 5 
 X | 10 
 L | 50 
 C | 100 
 D | 500 
 M | 1000 

### Reglas

Sólo se contemplan números entre el 1 y el 3999

* Los símbolos I, X, C y M se pueden repetir hasta tres veces.
* Los símbolos V, L y D no pueden repetirse.
* Los símbolos I, X y C se suman si están a la derecha de otro mayor o igual.
* Los símbolos I, X y C se restan si están a la izquierda de otro mayor y solamente pueden anteponerse a los dos símbolos que le siguen en la sucesión.
* I se resta de V y X
* X se resta de L y C
* C se resta de D y M
* Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.

### Ejercicios

* Crear una función para pasar de número romanos a árabes
* Crear una función para pasar de árabes a romanos
* Hacer un validador de números romanos*/


function convert(num){
	let romanos = "";
	let numerosRomanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	let numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

	for(let i = 0; i < numeros.length; i++){
		while(num >= numeros[i]){
			romanos = romanos + numerosRomanos[i];
			num = num - numeros[i];
		}
	}
	return romanos;
}
console.log(convert(120));
console.log(convert(3999));
console.log(convert(2000));
console.log(convert(2861));
console.log(convert(3840));
console.log(convert(59));


function convertToDecimal(str) {
	let decimal = 0;
	let numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	let numerosRomanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	
	for(let i = 0; i < numeros.length; i++){
		while(str.indexOf(numerosRomanos[i]) === 0){
			decimal += numeros[i];
			str = str.replace(numerosRomanos[i], "");
		}
	}
	return decimal;
}
console.log(convertToDecimal("MMMCMXCIX"));
console.log(convertToDecimal("MMMCM"));
console.log(convertToDecimal("MMMCMXC"));
console.log(convertToDecimal("IX"));
console.log(convertToDecimal("MDC"));



function validarRomanos(str) {
	
	const regex = "^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$";
	return str.match(regex) != null;
}

console.log(validarRomanos("XXX"));
console.log(validarRomanos("PMXI"));
console.log(validarRomanos("CML"));
console.log(validarRomanos("CMKJ"));
console.log(validarRomanos("XXT"));
console.log(validarRomanos("MMLIV"));