const productos = [
	{id: 1, nombre: "Collar", precio: 15, stock: 5}, 
	{id: 2, nombre: "Jabon", precio: 4, stock: 0},
	{id: 3, nombre: "alimento", precio: 26, stock: 4}
];


function calcularSubtotal () {

	let productosEnStock = productos.filter((prod) => {
		if (prod.stock > 0){
			return true
		}
	})
	for (const producto of productosEnStock){
		console.log(`id: ${producto.id}, producto: ${producto.nombre}, precio: $${producto.precio}`)
	}

	let subtotal = 0;
	let cantidad = 0;

	let productoIngresado = prompt("Ingrese codigo de producto")

	while(productoIngresado !== "s") {
		switch(productoIngresado) {
			case "1":
				cantidad = prompt("Cuantos desea?")
				subtotal += cantidad * productos[0].precio
				break;
			case "2":
				cantidad = prompt("Cuantos desea?")
				subtotal += cantidad * productos[1].precio
				break;
			case "3":
				cantidad = prompt("Cuantos desea?")
				subtotal += cantidad * productos[2].precio
				break;
		}
		productoIngresado = prompt("Ingrese codigo de producto \n si no quiere ingresar mas productos, ingrese s")	
	}
	return subtotal;
}

function aplicarDescuentoSiCorresponde(subtotal) {
	let total = subtotal
	if (subtotal > 50) {
		total = subtotal - subtotal / 10
	}
	return total
}

const subtotal = calcularSubtotal()
console.log("El subtotal es " + subtotal)

const total = aplicarDescuentoSiCorresponde(subtotal)
console.log("El total es " + total)