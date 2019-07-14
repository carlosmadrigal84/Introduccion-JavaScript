/*Nos dan un número entre el 1 y 100, y tenemos que devolver por orden lo siguiente:

* Si el número es divisible por 3, escribiremos “Foo” en lugar del número
* Si el número es divisible por 5, añadimos “Bar”
* Si el número es divisible por 7, añadimos “Quix”.
* Por cada dígito 3,5 o 7, añadiremos “Foo”, “Bar”, “Quix” respectivamente y en orden de aparición.

### Ejemplos: 

* 1  -> 1
* 2  -> 2
* 3  -> FooFoo (divisible por 3, contiene 3)
* 4  -> 4
* 5  -> BarBar (divisible por 5, contains 5)
* 6  -> Foo (divisible por 3)
* 7  -> QuixQuix (divisible por 7, contiene 7)
* 8  -> 8
* 9  -> Foo
* 10 -> Bar
* 13 -> Foo 
* 15 -> FooBarBar (divisible por 3, divisible por 5, contiene 5)
* 21 -> FooQuix
* 33 -> FooFooFoo (divisible por 3, contiene 3)
* 51 -> FooBar
* 53 -> BarFoo
* 75 -> FooBarQuixBar(divisible por 3, divisible por 5, contiene un 7, contiene un 5)*/

let result = "";

function foobarquix (num){

	return multiple(num)+contains(num+"");
}

function contains(num){
	result = "";
	if(num.indexOf("3") > -1){
		result += "Foo";
	}
	if(num.indexOf("5") > -1){
		result += "Bar";
	}
	if(num.indexOf("7") > -1){
		result += "Quix";
	}
	return result;
}

function multiple(num){
	result = "";
	if(num % 3 == 0){
		result += "Foo";
	}
	if(num % 5 == 0){
		result += "Bar";
	}
	if(num % 7 == 0){
		result += "Quix";
	}
	return result;
}

console.log(foobarquix(105)); //FooBarQuix
console.log(foobarquix(15));  //FooBar
console.log(foobarquix(21));  //FooQuix
console.log(foobarquix(35));  //BarQuix
console.log(foobarquix(12));  //Foo
console.log(foobarquix(10));  //Bar
console.log(foobarquix(14));  //Quix
console.log(foobarquix(50));  //Bar
console.log(foobarquix(2));   //Nada
console.log(foobarquix(45));  //FooBar
