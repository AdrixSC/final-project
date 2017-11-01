#Descrpción

Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn.

Consideraciones Específicas

1. Tu código debe estar compuesto por 1 función: isValidCard
2. El usuario no debe poder ingresar un campo vacío

##Pseudocódigo
1. Preguntar por medio de un prompt el número de la tarjeta al usuario, guardarlo en una variable card.
2. Validar si el número ingresado no tiene espacios.
   2.1 si el número ingresado no tiene espacios, continuar
   2.2 si tiene espacios, retornar undefined y finalizar
3. Convertir el número recibido en un array y guardarlo en otra variable llamada numberCard.
4. Obtener por medio de un for los números pares iterando dos a dos e inicializando en 1, guardarlos en variable even, y convertirlos en un array.
5. Invertir los numeros de var numberCard usando for y los métodos .pop y .splice
6. Obtener por medio de un for los números impares iterando uno a uno, guardarlos en variable odd, y convertirlos en un array.
7. Multiplicar por 2 los números del array de even
   7.1 si el número es mayor o igual que 10, sumar digitos
   7.2 si no, continuar
8. Sumar variable multiply + variable odd y dividirlos entre 10.
   8.1 si el resultado es cero, debe regresar true.
   8.2 si el resultado no es cero, regresar false.
9. Fin


 ###Diagrama_de_flujo

 Se incluye el diagrama de Flujo

 ![Diagrama_de_flujo](https://www.lucidchart.com/publicSegments/view/0fb47c87-e369-45f3-895b-bf3e9c6ccf47/image.png)
