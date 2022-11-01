function calcularTotal(){
    var cantidad = document.getElementById("input-cantidad").value;
    var categoria = document.getElementById("categoria");
    var textoCategoria = categoria.options[categoria.selectedIndex].text;
    var precioBase = 200;
    var total = 0;

    if (cantidad < 0) {
        alert('numero invalido');
        return
    }

    if (cantidad == 0) {
        alert('Ingrese la cantidad de entradas!!!');
        return
    }

    if (textoCategoria == "Estudiante") {
        total = precioBase * cantidad * 0.2;
    } else if (textoCategoria == "Trainee") {
        total = precioBase * cantidad * 0.5;
    } else if (textoCategoria == "Junior") {
        total = precioBase * cantidad * 0.85;
    } else {
        total = precioBase * cantidad;
    }

    document.getElementById("totalAPagar").innerHTML = "Total a Pagar: $" + total;
}

function borrarTotal(){
    document.getElementById("totalAPagar").innerHTML = "Total a Pagar: $";
}