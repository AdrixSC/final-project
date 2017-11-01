//Pedir una frase al usuario y guardarla en una variable.
var messagge = prompt("Escribe una frase");
//Declarar variable en la que se guardará un character vacío
var ciph = "";
//Declarar variable con el valor fijo, que es 33
var n = 33;
//Se crea una función llamada cipher
var cipher = function() {
  //Recorrer cada posición de la frase.
    for (i = 0; i < messagge.length; i++) {
      var character = messagge.charCodeAt(i);//Encontrar el número de la letra en código ASCII.
         //Validar si corresponde a una minuscula o mayuscula.
      if (character >= 97 && character <= 122) {
        //Aplicar la fórmula de cifrado César al número ASCII (para las minusculas) a la posición del primer caracter el cual va a aumentar de uno en uno para descifrar cada caracter, restándole a este valor el número con el que se inicia el abedecario en el codigo ASCII (97) y sumarle el valor de n; a ese resultado aplicarle el modulo de 26 (que es el número de elementos del abedecario normal y sumarle nuevamente el valor del código ASCII (97) que nos dará el resultado final (porque lo está convirtiendo a código ASCII).

       ciph += String.fromCharCode((character - 97 + n) % 26 + 97);//Se agrega cada letra en un string.
      } //Lo mismo que lo anterior pero con valores para mayusculas.
        else if (character >= 65 && character <= 90) {
       ciph += String.fromCharCode((character - 65 + n) % 26 + 65);
        } // si el texto tiene espacios vacíos o numbers returnar undefined
         /*else (character === typeof (number) {
           return undefined;
          }*/

    }
  //devolver el texto cifrado
  return alert("El mensaje cifrado es: " + ciph)
}

/*var decipher = función (ciph){
  if (character )
}*/
//invocar a la función cipher
cipher(messagge);
