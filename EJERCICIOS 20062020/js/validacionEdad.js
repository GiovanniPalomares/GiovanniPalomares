function valEdad(formulario) {
    //validar si la fecha es correcta
    var fecha = formulario.fecha.value;
    var y = fecha.substring(0, fecha.lastIndexOf("-") - 3);
    var m = fecha.substring(5, fecha.lastIndexOf("-"));
    var d = fecha.substring(fecha.lastIndexOf("-") + 1);
    var fevchaAño = new Date(y, 1, 1); // Año en 4 dígitos
    var formatoFecha = new Date(y, m, d); // Formato de fecha del form

    var fechaNace = new Date(formatoFecha);
    var fechaActual = new Date()

    var mes = fechaActual.getMonth();
    var dia = fechaActual.getDate();
    var año = fechaActual.getFullYear();

    fechaActual.setDate(dia);
    fechaActual.setMonth(mes);
    fechaActual.setFullYear(año);

    edad = Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365));

    alert("La edad es: " + edad);


}