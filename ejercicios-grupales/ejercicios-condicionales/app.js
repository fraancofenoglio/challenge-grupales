//1.Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”.
//2.Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas.
//3.Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza.
//4.Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene.
//5.Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.
//6.Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.
//7.Ingresar una cadena de texto y reemplazar los espacios por asteriscos.
//8.Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.
//9.Solicitar un texto y mostrarlo todo menos la primera letra.
//10.Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.


//Ejercicio 1

// let texto = prompt("Ingrese un texto aleatorio");

// if( texto.includes('a')) {
//     alert("El texto contiene a");
// }
// else(
//     alert("El texto no contiene a")
// )

//Ejercicio 2 

// let texto = prompt("Ingrese un texto aleatorio");
    // alert(texto.toLocaleLowerCase());
    // alert(texto.toUpperCase());

//Ejercicio 3 
    //let texto = prompt("Ingrese una palabra");
    //alert(texto.charAt(3));


//Ejercicio 4
    //let texto = prompt("Ingrese un texto aleatorio");
    //let text = texto.replace(/\s+/g, "");
    //alert(text.length);
    
//Ejercicio 5
    // let numero = prompt("Ingrese un texto aleatorio");
    // alert(numero.length);

//Ejercicio 6:
    //let texto = prompt("Ingrese un texto aleatorio");
    //alert(texto.charAt(texto.length-1));

//Ejercicio 7:
    //let texto = prompt("Ingrese un texto aleatorio");
    //alert(texto.replace(/\s+/g, "*"));

//Ejercicio 8:
    //let texto = prompt("Ingrese una frase");
    //let letra = prompt("Ingrese una letra");
    //if(texto.includes(letra)) {
    //    alert("Contine la letra indicada.");
    //}
    //else {alert("No contiene la letra indicada.")
    //}
    
    //     const str = 'JavaScript';
    // const nuevaStr = str.replace("ava", "-");
    // console.log(nuevaStr);

    // EJERCICIO 9
    //let text = prompt("Ingrese un texto: ");
    //let textSinPrimeraLetra = text.slice(1);
    //alert(textSinPrimeraLetra);



    // EJERCICIO 10
    // let nombre = prompt("Ingrese su nombre en minuscula: ");
    // let primeraLetra = nombre.slice(0, 1);
    // let restoDelNombre = nombre.slice(1);
    // let primeraLetraMayuscula = primeraLetra.toUpperCase;
    // alert(primeraLetraMayuscula + restoDelNombre);


//Ejercicios con condicionales (parte 1):

//1.Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces que me calcule las medidas, sino, que muestre un mensaje de error. 
    // Ejercicio 5
    //let metros = prompt("Convertir medida"); 
    //if (parseFloat(metros)>= 0 ) {
    //    let pulgadas = parseFloat(metros) * 39.3701;
    //    let pies = parseFloat(metros) * 3.28084;
    //    let cm = parseFloat(metros) * 100;
    //    alert( parseFloat(metros) + " metros es igual a: " + parseFloat(pulgadas) +" pulgadas, " + parseFloat(pies) +" pies y " + parseFloat(cm) + " cm.");
    //}
    //else {
    //    alert("ERROR 404 NOT FOUND")
    //}

//2.Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad, sino decir que es mayor .

// const edad = prompt("Ingrese su edad: ");
// if(edad < 18 ){
//     alert("Es menor de edad");
// }
// else if( edad>=18){
//     alert("Es mayor de edad");
// }

//3.Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar si quiere cobertura de chocolate. Si dice Sí, mostrar el valor del helado 180 con el pedido completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. En caso de que no la requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.

// let sabores = prompt("Ingrese los sabores que desea: ");
// let cobertura = prompt("¿Desea cobertura de Chocolate? (S / N)");
// if (cobertura == "S" || cobertura == 's') {
//     alert("Su helado sabor(es) " + sabores + " con cobertura de chocolate de cuesta $180 baratito. Deje propina.");
// } else {
//     alert("Su helado sabor " + sabores + " sin cobertura de chocolate cuesta $150.");
// }

//1) Solicitar al usuario dos números y mostrar por alert el resultado de la suma de ambos.
//4.Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar.
// let firstNum = prompt("Ingrese un número");
// let secondNum = prompt("Ingrese otro número");
// let res = parseFloat(firstNum) + parseFloat(secondNum);
// console.log("El resultado de la suma es: " + res);
// if(res%2 == 0 ){
//     alert("Tu numero es par")
// }
// else {
//     alert("Tu numero es impar")
// }

//5.Solicitar al usuario un número e indicar si es positivo, negativo o cero.
// let numero = parseFloat(prompt("Ingrese un numero: "));
// if (numero > 0) {
//     alert("El número es positivo.");
// } else if( numero < 0) {
//     alert("El número es negativo.")
// } else if( numero === 0) {
//     alert("El número es cero.");
// }

// 6.Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar.
// let monto = parseFloat(prompt("Ingrese un monto: "));
// if (monto > 2000) {
//     let nuevoMonto = monto* 0.9;
//     alert("El monto supera los $2000, se le aplico un descuento de 10%. Total a pagar: $"+ nuevoMonto);
// }
// else{
//     alert("Total a pagar: $" + monto);
// }

// 7.Solicitar al usuario que ingrese una cadena de texto y luego un una posición. Indicar si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.)
// let texto = prompt("Ingrese un texto: ");
// let posicion = parseInt(prompt("Ingrese una posicion en formato numero: "));

// if(texto[posicion]=== "a" || texto[posicion]=== "e" || texto[posicion]=== "i" || texto[posicion]=== "o" || texto[posicion]=== "u"){
//     alert("La letra en la posicion " + posicion + " es una vocal");
// } else {
//     alert("La letra en la posicion " + posicion + " no es una vocal")
// }





// 8.Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, si está entre 4 y 5 responder: Reprobado , y 6 o más aprobado. 

// let nota = parseFloat(prompt("Ingrese su nota: "));
// if (nota > 0  && nota <=3) {
//     alert("Aplazado.");
// } else if  (nota == 4 || nota == 5) {
//     alert("Reprobado.");
// } else if(nota > 6 || nota <=10){
//     alert("Aprobado.");
// }



// 9.Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.
// let num1 = parseFloat(prompt("Ingrese un número: "));
// let num2 = parseFloat(prompt("Ingrese otro número: "));
// if(num1 ==  num2 ){
//     alert("Los numeros son iguales");
// }
// else if(num1< num2){
//     alert("El mayor es : " + num2);
// }
// else{
//     alert("El mayor es: "+ num1);
// }


// 10.Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días.

// let mes = parseFloat(prompt("Ingrese un mes (del 1 al 12): "));
// if (mes == 1 || mes == 3 || mes== 5 || mes== 7 || mes== 8 || mes== 10 || mes== 12 ) {
//     alert("El mes indicado tiene 31 días.");
// } else if (mes == 4 || mes==6 || mes==9 || mes==11) {
//     alert("El mes indicado tiene 30 días.");
// } else if (mes == 2) {
//     alert("El mes indicado tien 28/29 días.");
// }


// 11.Solicitar al usuario que ingrese 3 núm.31// ea del 1 al 12: "));
//Se puede usar switch? 
// switch (key) {
//     case value:
        
//         break;
//     case value:
        
//         break;
//     case value:
        
//         break;
//     case value:
        
//         break;
//     case value:
        
//         break;
//     case v    case value:
        
//         break;
// alue:
        
//         break;
//     case value:
        
//         break;

//     default:
//         break;
// }




//BONUS:

//1.Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. Si la clave es correcta y el monto mayor al balance, realizar la operación. Sino, mostrar un mensaje     case value:
        
  //      break;
//de error en caso de ser la clave incorrecta o pedir más dinero del disponible.



//2.Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.




//3.Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días.



