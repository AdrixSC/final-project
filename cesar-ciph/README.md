# Cifrado César
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

Consideraciones Específicas

1. Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
2. Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
3. El usuario no debe poder ingresar un campo vacío o que contenga números

## Pseudocoódigo

1. Pedir un mensaje al usuario por medio de un prompt y guardarlo en una variable.
2. Crear una funcion llamada ciph y una llamada n
3. Hacer un for dentro de esta funcion, para medir la longitud del mensaje
4. Guardar en una nueva variable, la variable del mensaje con el indice de su longitud
5. Hacer una comparación para validar cuando ingrese el mensaje en minusculas o mayusculas, comparando si es mayor o menor o igual al número que corresponda (por ejemplo, mayor o igual a 97 y menor o igual a 122, para las minusculas, y )
  5.1 si son minusculas, aplicar la formula del codigo ASCII a partir del número 97
  5.2 si son mayusculas, aplicar la formula del codigo ASCII a partir del número 65
  5.3 si el usuario ingresa espacios o numeros, returnar undefined
6. Retornar el resultado con un alert
7. Fin

###Diagrama de flujo


 Se incluye el diagrama de Flujo

 ![Diagrama_de_flujo](https://www.lucidchart.com/publicSegments/view/1540167e-4ff4-44b1-8e4d-4a5c7a0e911c/image.png)
