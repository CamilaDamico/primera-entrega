function obtenerProductosEnStock (productos){
	let productosEnStock = productos.filter((prod) => {
		if (prod.stock > 0){
			return true
		}
	})
	return productosEnStock;
} 

function calcularSubtotal (productos) {
	const productosEnStock = obtenerProductosEnStock(productos)

/* 	for (const producto of productosEnStock){
		console.log(`id: ${producto.id}, producto: ${producto.nombre}, precio: $${producto.precio}`)
	} */

	let subtotal = 0;
	let cantidad = 0;
	let carrito = []

	let textoAMostrar = ''
	productosEnStock.forEach(prod => {
		textoAMostrar += `${prod.id}. ${prod.nombre}, precio: $${prod.precio} \n`
	})

	let productoIngresado = prompt(
		"Ingrese codigo de producto: " + "\n" + textoAMostrar
	)

	while(productoIngresado !== "s") {
		let productoSeleccionado = productosEnStock.find((prod) =>{
			if (prod.id === parseInt(productoIngresado)){
				return true
			}
		})

		cantidad = prompt("Cuantos desea?")

		carrito.push({
			precio: productoSeleccionado.precio,
			cantidad: cantidad
		})

		productoIngresado = prompt( 
			"Ingrese codigo de producto: \n (si no quiere ingresar mas productos, ingrese s) \n" + textoAMostrar
		)
	}

	carrito.map(function (producto) {
		subtotal += producto.precio * producto.cantidad

	})

	return subtotal;
}

function aplicarDescuentoSiCorresponde(subtotal) {
	let total = subtotal
	if (subtotal > 50) {
		total = subtotal - subtotal / 10
	}
	return total
}

const productos = [
	{id: 1, nombre: "Collar", precio: 15, stock: 5}, 
	{id: 2, nombre: "Jabon", precio: 4, stock: 0},
	{id: 3, nombre: "Alimento", precio: 26, stock: 4}
];

const subtotal = calcularSubtotal(productos)
console.log("El subtotal es " + subtotal)

const total = aplicarDescuentoSiCorresponde(subtotal)
console.log("El total es " + total)