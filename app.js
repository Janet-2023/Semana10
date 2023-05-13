//EJERCICIO 01

/* Solicitar al usuario un número, y determinar si es divisible entre dos o no.
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x número no
es divisible entre 2”.*/



/*
let x = 11;

if ((x % 2) == 0) {
    console.log("Es divisible")
} else {
    console.log("No es divisible")
}

//EJERCICIO 02
/*2. Crear un programa que determine si un número introducido en un Prompt es par
o no, la respuesta será mostrada en un Alert */


/*
let numero = prompt("Introduce un numero");

let resultado = parIm(numero);
alert("El numero " + numero + " es " + resultado);

function parIm(numero) {
    if (numero % 2 == 0) {
        return "par";
    } else {
        return "Impar";
    }
}

// EJERCIO 03

/* 3. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.
No considerar el caso en que ambos números son iguales.*/

/*
let a = prompt("Ingrese el 1pr numero");
let b = prompt("Ingrese el 2do numero");

if(a === b){
    console.log("")
} if (a<b){
    console.log("El numero " + a + "es menor " )
}if(b<a){
    console.log("El numero " + b + " es menor" )
}

// EJERCICIO 04

/*4. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número
mayor. Considerar el caso en que 2 números sean iguales.
 */

/*
let c = prompt("Ingresa el primer numero");
let d = prompt("Ingresa el segundo numero");
let e = prompt("Ingresa el tercer numero");

if (c === d && c === e && d === e) {
    console.log("")
}
if (c > d) {
    console.log("El numero es mayor: " + c)

} else if (c > e) {
    console.log("El numero es mayor: " + e)
}

if (d > e) {
    console.log("El numero " + d + " es mayor")
} else {
    console.log("El numero " + e + " es mayor")
}


// EJERCICIO 5

/*5. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es
lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o
domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
 */
 /*
const  semana = ['Lunes', 'Viernes', 'Sabado', 'Domigo'];
if(semana === 'Lunes'){
    console.log('Bievenido a Lunes');

}else if (semana === 'Viernes'){
    console.log('Feliz viernes');

}else if(semana === 'Sabado' || semana === 'Domingo'){
    console.log('Buen fin de semana');
}else{
    console.log('El dia ingresado no esta en la lista')

}
console.log(semana['Sabado']);
*/
/*

let semana = 'Domingo'
 switch(semana){
    case 'Lunes':
        console.log('Bievenido a Lunes')
    break;
    case 'Viernes':
        console.log('Feliz viernes')
    break;
    case 'Sabado':
    case 'Domingo':
        console.log('Buen fin de semana')
    break;
    default:
    console.log('El dia ingresado no esta en la lista')

 }


/*
7. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente
mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!”
solo al mostrar los números indicados por el usuario.
*/

/*
function usuario (){
let num1  = prompt("Ingresa el primero numero");
let num2 = prompt("Ingresa el segundo numero");

for(i = 1; i <=50; i++ ){
    if(i == num1 || i == num2 ){
        console.log(` ${i}  Loteria`)

    }else{
        console.log(i)
    }
}
}
usuario(1, 50)
*/
 
/*
8. Crea un programa que solicite al usuario números, si lo que este introduce es un
número, guardarlo en un arreglo. Para terminar de preguntar al usuario debe
ingresar el número 0. Finalmente mostrar la lista de números capturados en
pantalla o en la consola.
*/



/*
let num;
let arreglo = [];

while(num !== 0){
     num  = parseInt(prompt("Ingresa los numeros"));
     arreglo.push(num)
     console.log(arreglo)
// el parseInt lo convierte a numero 
// Push es un metodo de arreglos que guarda los valores en un arreglo

}


/*
9. Crea un programa que solicite al usuario letras o palabras, si es así guardar el
resultado. Para terminar de preguntar al usuario no debe escribir valor alguno. Al
terminar de capturar, mostrar en pantalla la concatenación de todas las palabras
capturadas.
*/

/*
let letras;
let palabras ="";

while(letras !==""){
     letras  = prompt("Ingresa letras o palabras");
     palabras = palabras +" " + letras
     console.log(palabras)


}

/*
10. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves,
domingo, etc). El programa mostrará un mensaje personalizado para cada día de
la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día.
En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve
a descansar” y terminar la captura de información.
*/

/*
let dia;

while(dia !=="Domingo"){
    dia = prompt("Ingresa los dias de la semana");
    if(dia == "lunes"){
        alert ("Feliz Lunes")
    } else if(dia == "martes"){
        alert("Feliz martes")
    }
    else if(dia == "martes"){
        alert("Feliz martes")
    }
    else if(dia == "miercoles"){
        alert("Feliz Miercoles")
    }
    else if(dia == "jueves"){
        alert("Feliz Jueves")
    }
    else if(dia == "viernes"){
        alert("Feliz Viernes")
    }
    else if(dia == "sabado"){
        alert("Feliz Sabado")
    }
    else {
        alert("Ve a descansar")
    }
    
}


/*
11. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el
número efectivamente esté en ese rango, si no lo está imprima un mensaje de
error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si
está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
*/

/*
let nota = prompt("Ingresa tu calificacion");

if(nota >=1 && nota <=10  ){
    if(nota <6){
        console.log("Reprobado")
    }else if(nota >=6 && nota <=8){
        console.log("Regular")
    }else if(nota == 9){
        console.log("Bien")       
    }else{
        console.log("Excelente")
    }
}

else{
    console.log("Error")
}




/*
12. Escribe un programa que responda a un usuario que quiere comprar un helado en
una conocida marca de comida rápida, cuánto le costará en función del topping
que elija.
• El helado sin topping cuesta 50 MXN.
• El topping de oreo cuesta 10 MXN.
• El topping de KitKat cuesta 15 MXN.
• El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le
indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el
precio del helado sin ningún topping.
*/

let helado = prompt("Imgresa el topping de kitkat, oreo o brownie");
let heladoBase = 50;
let precioOreo = 10;
let precioKikat = 15;
let precioBrownie = 20;
let precio = 0;

if(helado == "kitkat"){
    precio = heladoBase + precioKikat 
    console.log(`El precio a pagar es ${precio}`)
}else if(helado == "oreo"){
    precio = heladoBase + precioOreo
    console.log(`El precio a pagar es ${precio}`)

}else if(helado == "brownie"){
    precio = heladoBase + precioBrownie
    console.log(`El precio a pagar es ${precio}`)

}else{
    console.log(`no tenemos este topping, lo sentimos, el precio a pagar es ${heladoBase}`)

}

/*
13. Un conocido portal de educación en tecnología está ofreciendo programas para
aprender a desarrollar aplicaciones. Escribe un programa que le indique a la
persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción
elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo
mensual:
• Course: $4999 MXN
• Carrera $3999 MXN
• Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento
correspondiente al precio final.
• Beca Facebook: 20% de descuento.
• Beca Google: 15% de descuento.
• Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto
gastaría en total por el curso elegido, tomando en cuenta las siguientes
duraciones:
• Course: 2 meses
• Carrera 6 meses
• Master: 12 meses
*/


/*
14. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
distancia recorrida por un vehículo con cargo extra por los litros consumidos,
tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser
0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es
mayor la cantidad de litros consumidos se ha de añadir 10 al total.
Considere qué: total a pagar = (precio kilometro x kms recorridos) + extra por litros
consumidos
*/