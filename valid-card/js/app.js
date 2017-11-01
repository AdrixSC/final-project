//Preguntanddo número de tarjeta y guardarlo en una variable
var card = prompt ("¿Cuál es el número de su tarjeta?");
//49927398716
//validar si el número que ingresa en usuario es correcto
/*if (card != typeof number){
 return alert("Número de tarjeta invalida");
}*/
//convirtiendo el numero de tarjeta recibido en un array
var numberCard = card.split("");

//nombrando variable evenNumber para guardar valor de los numeros pares de reverse, y haciendo un for para obtener los numeros pares inicializando desde 1 e incrementando de 2 en 2
var evenNumber = [""]; //variable para guardar los números pares

 for (var k=1; k<numberCard.length; k=k+2){
      evenNumber += numberCard[k];
      var even = evenNumber.split(""); //convirtiendo a array la variable evenNumber
     //var multiply = (even.length) * (2);

 }

 //haciendo un for empezando de 0, tomando como condición la longitud del array e incrementando de uno en uno
  for(var i=0; i<numberCard.length; i++){
      var item = numberCard.pop(); //nombrando variable item para guardar el elemento eliminado con el metodo .pop del array
        numberCard.splice(i,0,item); //aplicando metodo .splice empezando desde el indice, diciendo que no elimine nada y que agregue el elemento eliminado de la variable item, y guardar el array invertido en una nueva variable, reverse
      var reverse = numberCard;
     //nombrando variable evenNumber para guardar valor de los numeros impares de reverse, y haciendo un for para obtener los numeros impares incrementando de 2 en 2
     var oddNumber = ""; //variable para guardar los números impares
     //var odd = oddNumber("");

    for (var j=0; j<reverse.length; j=j+2){
        oddNumber += reverse[j];
          var odd = oddNumber.split("");
    }
      for (var y=0; y<even.length; y++){
            var multiply = even[0,1,2,3,4] * 2;

      }

 }
console.log(card);
//console.log("hola",numberCard);
console.log(reverse);
console.log(oddNumber);
console.log(evenNumber);
console.log("pares",even);
console.log("impares",odd);
console.log(multiply);
//console.log(sum);
//console.log(module);
