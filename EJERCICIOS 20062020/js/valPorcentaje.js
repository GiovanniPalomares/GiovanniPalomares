function valPorcentaje(formulario) {
    if (formulario.hombres.value.length < 3) {
        alert("Escriba por lo menos 3 carcateres en el campo de nombre");
        formulario.hombres.focus();
        return false
    }
    if (formulario.mujeres.value.length < 3) {
        alert("Escriba por lo menos 3 carcateres en el campo de mujer");
        formulario.mujeres.focus();
        return false
    }
    var hom = parseInt(formulario.hombres.value);
    var muj = parseInt(formulario.mujeres.value);
    var total = hom + muj;
    var porHom = (hom * 100) / total;
    var porMuj = (muj * 100) / total
    alert('El porcentaje de Hombres es : %' + porHom);
    alert('El porcentaje de Hombres es : %' + porMuj);
}