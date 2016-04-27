//Ejercicio #8: ELEVAR UN NUMERO ENTERO A LA "N" POTENCIA

var N = prompt("Número que se elevalá a la 'X' potencia")
var P = prompt("¿Qué valor representará 'X' potencia")
var R = 1

for (var i = 1; i <= P; i++) {
	R = (R * N)	
}
alert("Resultado de " + N + " a la " + P + " potencia " + " es " + R)