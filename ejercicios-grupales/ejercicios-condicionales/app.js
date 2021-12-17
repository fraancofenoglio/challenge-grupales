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


// 11.Solicitar al usuario que ingrese 3 núm e indicar cual es el mayor.
// let num1 = parseFloat(prompt("Ingrese el primer número"));
// let num2 = parseFloat(prompt("Ingrese el segundo número")  );
// let num3 = parseFloat(prompt("Ingrese el tercer número"));

// if (num1 < num2 && num2 < num3) {
//     alert("El mayor es: " + num3);
// } else if (num2<num1 && num3 < num1){
//     alert("El mayor es: " + num1);
// } else {
//     alert("El mayor es: "+ num2);
// }

//12. Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 
//(Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).

// let edad = prompt("Ingrese su edad");
// let bebida = prompt("Ingrese la bebida que desea: (Cerveza / Jugo / Agua)");
// let bebidaMinuscula = bebida.toLowerCase();
// let precioCerveza = 200;
// let precioJugo = 100;
// let precioAgua = 80;
// if (edad < 18 && bebidaMinuscula == "cerveza"){
//     alert("Usted es menor de edad, no puede comprar esta bebida.")
// } else if (bebidaMinuscula == "cerveza"){
//     alert("La "+bebidaMinuscula + " su valor es: $"+ precioCerveza );
// } else if (bebidaMinuscula == "jugo"){
//     alert(bebidaMinuscula + " su valor es: $"+ precioJugo);
// } else if (bebidaMinuscula == "agua") {
//     alert(bebidaMinuscula + " su valor es: $" + precioAgua);
// }
// let pago = parseFloat(prompt("¿Con cuánto va a pagar?"));

// if (pago < precioCerveza || pago < precioJugo || pago < precioAgua){
//   alert("No te alcanza para pagar!!");
// } else if (bebidaMinuscula == "cerveza"){
//     alert("La "+ bebidaMinuscula + " cuesta $"+ precioCerveza + " y su vuelto es $"+ (pago-precioCerveza)); 
// } else if (bebidaMinuscula == "jugo"){
//     alert("La "+ bebidaMinuscula + " cuesta $"+ precioJugo + " y su vuelto es $"+ (pago-precioJugo)); 
// } else if (bebidaMinuscula == "agua"){
//     alert("La "+ bebidaMinuscula + " cuesta $"+ precioAgua + " y su vuelto es $"+ (pago-precioAgua)); 
// }

// Si tiene 17 años y pide cerveza hay que darle un corte al programa.

//13. Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”).
// let numeroMes = parseFloat(prompt("Ingrese un número del 1 al 12: "));
// if  (numeroMes == 1){
//     alert("Enero");
// }
// else if (numeroMes == 2 ){
//     alert("Febrero");
// }
// else if (numeroMes == 3 ){
//     alert("Marzo");
// }
// else if (numeroMes == 4 ){
//     alert("Abril");
// }
// else if (numeroMes == 5 ){
//     alert("Mayo");
// }
// else if (numeroMes == 6 ){
//     alert("Junio");
// }
// else if (numeroMes == 7 ){
//     alert("Julio");
// }
// else if (numeroMes == 8 ){
//     alert("Agosto");
// }
// else if (numeroMes == 9 ){
//     alert("Septiembre");
// }
// else if (numeroMes == 10 ){
//     alert("Octubre");
// }
// else if (numeroMes == 11 ){
//     alert("Noviembre");
// }
// else if (numeroMes == 12 ){
//     alert("Diciembre");
    
// }

//BONUS:

//1.Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. Si la clave es correcta y el monto mayor al balance, realizar la operación. Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del disponible.


// alert("Su clave es 10000-1");
// let clave = 9999;
// let balance = 5000;
// let intento = parseFloat(prompt("Ingrese la clave: ")); 
// //let monto = parseFloat(prompt("Ingrese el monto a retirar"));

// if (intento == clave) {
//     let monto = parseFloat(prompt("Ingrese el monto a retirar"));
//     if (monto < balance){
//         alert("Operación exitosa. Su saldo restante es: $" + (balance - monto));
//     }
//     else {
//         alert("Error!, Saldo insuficiente.");
//     }

// } else {
//     alert("Error!, clave incorrecta, vuelva a intentar");
// }



//2.Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.

                                        // Aries: 21 de marzo al 19 de abril.
                                        // Tauro: 20 de abril al 20 de mayo.
                                        // Géminis: 21 de mayo al 20 de junio.
                                        // Cáncer: 21 de junio al 22 de julio.
                                        // Leo: 23 de julio al 22 de agosto.
                                        // Virgo: 23 de agosto al 22 de septiembre.
                                        // Libra: 23 de septiembre al 22 de octubre.
                                        // Escorpio: 23 de octubre al 21 de noviembre.
                                        // Sagitario: 22 de noviembre al 21 de diciembre.
                                        // Capricornio: 22 de diciembre al 19 de enero.
                                        // Acuario: 20 de enero al 18 de febrero.
                                        // Piscis: 19 de febrero al 20 de marzo


    // let dia = parseFloat(prompt("Ingrese su día de cumpleaños: "));
    // let mes = parseFloat(prompt("Ingrese su mes (del 1 al 12) de cumpleaños: "));

    // if ((dia >= 21 && mes==3) || (dia <= 19 && mes== 4) ){
    //     alert("Sos de Aries");
    // } else if ((dia >= 20 && mes==4) || (dia<=20 && mes==5)) {
    //     alert("Sos de Tauro");
    // } else if ((dia >= 21 && mes==5) || (dia<=20 && mes==6)) {
    //     alert("Sos de Geminis");
    // } else if ((dia >= 21 && mes==6) || (dia<=22 && mes==7)) {
    //     alert("Sos de Cáncer");
    // } else if ((dia >= 23 && mes==7) || (dia<=22 && mes==8)) {
    //     alert("Sos de Leo");
    // } else if ((dia >= 23 && mes==8) || (dia<=22 && mes==9)) {
    //     alert("Sos de Virgo");
    // } else if ((dia >= 23 && mes==9) || (dia<=22 && mes==10)) {
    //     alert("Sos de Libra");
    // } else if ((dia >= 23 && mes==10) || (dia<=21 && mes==11)) {
    //     alert("Sos de Escorpio");
    // } else if ((dia >= 22 && mes==11) || (dia<=21 && mes==12)) {
    //     alert("Sos de Sagitario");
    // } else if ((dia >= 22 && mes==12) || (dia<=19 && mes==1)) {
    //     alert("Sos de Capricornio");
    // } else if ((dia >= 20 && mes==1) || (dia<=18 && mes==2)) {
    //     alert("Sos de Acuario");
    // } else if ((dia >= 19 && mes==2) || (dia<=20 && mes==3)) { 
    //     alert("Sos de Piscis");
    // } 

//3.Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días.



