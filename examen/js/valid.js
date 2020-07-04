function ventas() {
    if (formulario.salario.value == 0 || formulario.salario.value == 0) {
        alert("Coloque una cifra en el campo");
        formulario.salario.focus();
        return false
    }
    var ventas = prompt("Que valor tuvo la venta realizada: ");
    var salario = parseInt(formulario.salario.value);
    var comision = 12.5
    var total = (ventas * comision) / 100
    alert('La comision de la venta es: $' + total)
    var totalSalario = total + salario;
    alert('La suma del salario mas la comision es de: $' + totalSalario)
    var allValid = true;
    if (!allValid) {
        alert("Escriba solo numero en el campo Salario");
        formulario.salrio.focus();
        return false;
    }
    var decExp = /^[1-9]\d*(\.\d+)?$/
    if (!decExp.test(salario)) {
        alert('Ese valor no esta permitido')
    }
}