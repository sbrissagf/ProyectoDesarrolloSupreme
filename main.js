class Producto {
    constructor(nombre, precio, detalle, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    }

    sumarIva() {
        return this.precio * 1.21;
    }

    vender() {
        this.disponible = false;
    }

    precioSugerido() {
        return this.precio * 1.21 * 1.25;
    }

}


let arrayProductos = [];
do {
    let comprobacion = prompt('Ingrese nombre del producto o la palabra "fin" para terminar de agregar');
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin") {
        break;
    } else {
        nombreP = comprobacion;
        let precioP = prompt('Ingrese el precio del producto');
        let detalleP = prompt('Ingrese el detalle del producto');
        let cantidadP = prompt('Ingrese la cantidad solicitada del producto');
        arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
    }
}

while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin");

console.log(arrayProductos);


for (let producto of arrayProductos) {
    document.write("Nombre: " + producto.nombre);
    document.write("Detalle: " + producto.detalle);
    document.write("Cantidad: " + producto.cantidad);
    document.write("Precio: " + producto.precio);
    document.write("Precio con IVA: " + producto.sumarIva());
    console.log(producto.nombre);
    console.log(producto.detalle);
    console.log(producto.cantidad);
    console.log(producto.sumarIva());
}