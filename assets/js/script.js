// Funcion que permite mostrar un boton Volver en la pagina
function botonVolver() {
    document.write("<br>")
    // Crea variable con la carga de un boton volver
    var btV = '<button onclick="javascript:window.location.reload();">Volver</button>'
    // Imprime el boton en la pagina
    document.write(btV)
}
//---------------------------EJERCICIO 1-------------------------------------------------------
// Ejercicio 1. Realizar el diagrama de flujo para las siguientes operaciones matemáticas:
// Suma, Resta, División, Multiplicación y el módulo de un número,
// partiendo de dos números ingresados por el usuario.
function ejercicio1Diagrama() {
    // Imprime resultado del ejercicio en cuestion
    document.write("<h3>Resultado del Ejercicio 1:</h3>")
    // Crea variable con carga de imagen del diagrama de flujo
    var img_ej1 = '<img src="assets/img/Ejercicio1_Diagrama.png" alt="Diagrama de Flujo Ejercicio 1">'
    // Imprime la imagen en la pagina
    document.write(img_ej1)
    document.write("<br><br>")
    // Presenta boton para volver
    botonVolver()
}
// Este codigo ha sido generado por PSeInt para ejecutar el programa 
// Se realizan mejoras para mostrar mensajes y resultado
function ejercicio1Ejecutar() {
    // se declaran variables
    var n1, n2;
    // Se solicita ingresar valores por prompt 
    // y se guardan ambos en variables
    // Luego cada valor se convierte a flotante
    n1 = prompt("Ingrese el primer número:", 1)
    n1 = parseFloat(n1)
    n2 = prompt("Ingrese el segundo número:", 1)
    n2 = parseFloat(n2)
    // Se escriben valores ingresados en documento html
    document.write("<h3>Primer número: ", n1, '</h3>')
    document.write("<h3>Segundo número: ", n2, '</h3>')
    // Se escribe en documento html los resultados
    document.write("La suma de ", n1, "+", n2, " es: ", (n1 + n2), '<BR/>')
    document.write("La resta de ", n1, "-", n2, " es: ", (n1 - n2), '<BR/>')
    document.write("La multiplicación entre ", n1, " y ", n2, " es: ", (n1 * n2), '<BR/>')
    document.write("La división de ", n1, " por ", n2, " es: ", (n1 / n2), '<BR/>')
    document.write("El módulo de ", n1, " dividido por ", n2, " es: ", (n1 % n2), '<BR/>')
    // Se escribe salto de linea
    document.write("<br><br>")
    // Presenta boton para volver
    botonVolver()
    //Se escribe lo mismo en consola
    console.log("Primer número: ", n1)
    console.log("Segundo número: ", n2)
    console.log("La suma de ", n1, "+", n2, " es: ", (n1 + n2))
    console.log("La resta de ", n1, "-", n2, " es: ", (n1 - n2))
    console.log("La multiplicación entre ", n1, " y ", n2, " es: ", (n1 * n2))
    console.log("La división de ", n1, " por ", n2, " es: ", (n1 / n2))
    console.log("El módulo de ", n1, " dividido por ", n2, " es: ", (n1 % n2))
}
//---------------------------EJERCICIO 2-------------------------------------------------------
// Ejercicio 2. Realizar operaciones con dos números.
// Pedir al usuario que ingrese dos números diferentes y mayores a cero.
// Para ambos números, calcular lo siguiente: Suma, Resta, División, Multiplicación, Módulo
function ejercicio2() {
    // Se solicita ingresar valores por prompt 
    // y se guardan ambos en variables
    // Luego cada valor se convierte a flotante
    var n1 = prompt("Ingrese el primer numero: ", 1)
    var n1 = parseFloat(n1)
    var n2 = prompt("Ingrese el segundo numero: ", 2)
    var n2 = parseFloat(n2)
    //Imprime resultado del ejercicio en cuestion
    document.write("<h3>Resultado del Ejercicio 2:</h3>")
    // Se valida si los valores ingresados cumplen los requisitos indicados
    if (n1 > 0 & n2 > 0 & n1 !== n2) {
        // Se imprime en la pagina el resultado de cada operacion, seguido de un salto de linea
        document.write("La suma de " + n1 + " + " + n2 + " es: " + (n1 + n2))
        document.write("<br>")
        document.write("La resta de " + n1 + " - " + n2 + " es: " + (n1 - n2))
        document.write("<br>")
        document.write("La división de " + n1 + " por " + n2 + " es: " + (n1 / n2))
        document.write("<br>")
        document.write("La multiplicación de " + n1 + " por " + n2 + " es: " + (n1 * n2))
        document.write("<br>")
        document.write("El módulo de " + n1 + " dividido por " + n2 + " es: " + (n1 % n2))
        document.write("<br>")
        // Presenta boton para volver
        botonVolver()
        //Se escribe lo mismo en consola
        console.log("La suma de " + n1 + " + " + n2 + " es: " + (n1 + n2))
        console.log("La resta de " + n1 + " - " + n2 + " es: " + (n1 - n2))
        console.log("La división de " + n1 + " por " + n2 + " es: " + (n1 / n2))
        console.log("La multiplicación de " + n1 + " por " + n2 + " es: " + (n1 * n2))
        console.log("El módulo de " + n1 + " dividido por " + n2 + " es: " + (n1 % n2))
    } else {
        console.log(" ")
        console.log(" ")
        console.error("Los valores ingresados no cumplieron los requisitos")
        alert("Los valores ingresados no cumplieron los requisitos")
        window.location.reload();
    }
}
//---------------------------EJERCICIO 3-------------------------------------------------------
// Ejercicio 3. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y
// que la transforme a grados Kelvin y Fahrenheit.
// Se debe considerar la siguiente información respecto a la equivalencia de las
// escalas de temperatura:
// - 0 Grados Celsius corresponden a 273,15 Kelvin.
// La fórmula para convertirlos es 0 °C + 273.15 = 273.15 K
// - 0 Grados Celsius corresponden a 32 Fahrenheit.
// La fórmula para convertirlos es (0 °C × 9/5) + 32 = 32 °F
function ejercicio3() {
    // Se crea una variable para recibir valor por teclado
    var tempC = prompt("Ingrese la temperatura en grados Celsius: ", 35)
    var tempC = parseFloat(tempC)
    //Imprime resultado del ejercicio en cuestion
    document.write("<h3>Resultado del Ejercicio 3:</h3>")
    // Imprime en la pagina la temperatura en grados Kelvin
    document.write("La temperatura en grados Kelvin es: " + (tempC + 273.15) + " K")
    document.write("<br>")
    // Imprime en la pagina la temperatura en grados Fahrenheit
    document.write("La temperatura en grados Fahrenheit es: " + ((tempC * (9 / 5)) + 32) + " °F")
    document.write("<br>")
    // Presenta boton para volver
    botonVolver()
    //Se escribe lo mismo en consola
    console.log("Resultado del Ejercicio 3:")
    console.log("La temperatura en grados Kelvin es: " + (tempC + 273.15) + " K")
    console.log("La temperatura en grados Fahrenheit es: " + ((tempC * (9 / 5)) + 32) + " °F")
}
//---------------------------EJERCICIO 4-------------------------------------------------------
// Ejercicio 4. Crear un programa que pida al usuario una cantidad de días y que muestre su
// equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
// resultado debe ser 1 año, 1 semana y 1 día.
// Se debe considerar lo siguiente:
// - 1 año tiene 365 días
// - 1 semana tiene 7 días
// Se recomienda usar la función Math.floor para obtener la parte entera de un número decimal.
function ejercicio4() {
    // Se crea una variable para recibir valor por teclado
    var cantDias = prompt("Ingrese la cantidad de dias: ", 373)
    var cantDias = parseInt(cantDias)
    // Se calcula la cantidad de años obteniendo solo el valor entero
    var anio = Math.floor(cantDias / 365)
    // Se calcula la cantidad de semanas obteniendo solo el valor entero
    var semana = Math.floor((cantDias - (365 * anio)) / 7)
    // Se calcula la cantidad de dias sobrantes respecto de la cantidad de años
    var diasSobrantes = cantDias - (365 * anio)
    // Se calcula la cantidad de dias que son inferiores a una semana
    var dia = diasSobrantes - (7 * semana)
    //Imprime resultado del ejercicio en cuestion
    document.write("<h3>Resultado del Ejercicio 4:</h3>")
    // Imprime en la pagina la cantidad de años, semanas y dias
    document.write(anio + " año(s), " + semana + " semana(s), " + dia + " dia(s)")
    document.write("<br>")
    // Presenta boton para volver
    botonVolver()
    //Se escribe lo mismo en consola
    console.log("Resultado del Ejercicio 4:")
    console.log(anio + " año(s), " + semana + " semana(s), " + dia + " dia(s)")
}
//---------------------------EJERCICIO 5-------------------------------------------------------
// Ejercicio 5. Crear un programa que solicite al usuario 5 números y realice los cálculos
// - La suma de todos los números.
// - El promedio de los 5 números ingresados.
function ejercicio5() {
    // Se crean variables para recibir valores por teclado
    var num1 = prompt("Ingrese el primer numero: ", 1)
    var num1 = parseInt(num1)
    var num2 = prompt("Ingrese el segundo numero: ", 2)
    var num2 = parseInt(num2)
    var num3 = prompt("Ingrese el tercer numero: ", 3)
    var num3 = parseInt(num3)
    var num4 = prompt("Ingrese el cuarto numero: ", 4)
    var num4 = parseInt(num4)
    var num5 = prompt("Ingrese el quinto numero: ", 5)
    var num5 = parseInt(num5)
    // Calcula sumatoria y promedio
    var suma = (num1 + num2 + num3 + num4 + num5)
    var promedio = suma / 5
    //Imprime resultado del ejercicio en cuestion
    document.write("<h3>Resultado del Ejercicio 5:</h3>")
    // Imprime en la pagina la suma de los cinco numeros
    document.write("La suma de los numeros es: " + suma)
    document.write("<br>")
    // Imprime en la pagina el promedio de los cinco numeros
    document.write("El promedio de los numeros es: " + promedio)
    document.write("<br>")
    // Presenta boton para volver
    botonVolver()
    //Se escribe lo mismo en consola
    console.log("Resultado del Ejercicio 5:")
    console.log("La suma de los numeros es: " + suma)
    console.log("El promedio de los numeros es: " + promedio)
}