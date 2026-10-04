//5.1

var lis = document.querySelectorAll('#productos .precio');
//uso el selector para buscar en productos (id) con la clase precio
//Eso me da una lista de elementos de la clase precio en el listado de productos
//muestro su longitud

var contarSpan = lis.length;

console.log('Hay ' + contarSpan + ' precios listados');

//5.2

var cafe = document.querySelector('#p1');

console.log('inner' + cafe.innerHTML);
console.log('tContent' + cafe.textContent);
// No son iguales, inner HTML muestra todos los componentes del html, incluidas las etiquetas
//text content sólo muestra el texto.

//5.3
//primero cogemos la variable con el selector
//y luego como es cambiar texto usamos textContent

var n2 = document.querySelector('#n2');

n2.textContent = 'Reposición completada. ¡Gracias por vuestra paciencia!.';

//5.4
//con un for each primero convertimos el texto a números
//luego guardamos el precio nuevo (ojo porque sin esto no cambia nada)
//luego añadimos el precio a cada uno de los elementos.

lis.forEach(function (p) {
  let precioConvertido = parseFloat(p.textContent);
  precioConvertido = precioConvertido + 0.1;
  p.textContent = precioConvertido;
});

//5.5
//primero creamos el hijo
//luego como queremos etiquetas, añadimos contenido con innerHTML
//luego metemos al padre en una variable,y le añadimos el nuevo hijo.

var nuevoLi = document.createElement('li');
nuevoLi.innerHTML = 'Tila <span class="precio">2.20</span> euros';

var miLista = document.getElementById('lista');

miLista.append(nuevoLi);

//5.6
//para cambiar el texto y estructura usamos innerHTML con ' ' para que entienda lo que metemos.

cafe.innerHTML = 'Producto destacado <span class="precio">9.99</span> €';

//5.7

//ojo no funciona como el add, tenemos que indicar qué elemento queremos eliminar
n2.remove();

//5.8

//el nombre no es un id, son nombres. Uso for para cambiar que se marque la caja

var nombres = document.getElementsByName('alumnos');

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i].type == 'checkbox') {
    nombres[i].checked = true;
  }
}

//5.9 ¿?

console.log('Hay ' + contarSpan + ' precios listados');
