//Ejercicio #4: EDAD PROMEDIO
var n = prompt("¿Cuántos alumnos serán contemplados?")
var s = 0


for (var i = 1; i <= n; i++) {
	var edad = prompt("¿Qué edades tienen?");
    s = parseInt(s) + parseInt(edad);
	var p = s / n;
	}
alert("La edad promedio de " + n + " alumnos es " + p)

