let productosCompra = [
    
]



if (localStorage){
    
  if(localStorage.getItem('productosCompra') !== undefined && localStorage.getItem('productosCompra')){
   

 
  }else{
    localStorage.setItem("productosCompra", JSON.stringify(productosCompra))
  
  }
}
actualizarCarrito()
function actualizarCarrito(){
    var lista = document.getElementById("lista_carrito")
    lista.innerHTML = "";
    var productos_carrito = JSON.parse(localStorage.getItem('productosCompra'))
for(let p of productos_carrito){

    var boton =  document.createElement("button");
    boton.classList.add("boton-carrito")
    boton.innerText = "Eliminar"
    boton.setAttribute("data-id",p.id)

    var html = '<li><div class="row"><div class="col-5 p-3"><img class="w-100 img-carrito" src="'+ p.url +'"></div><div class="col-7 p-3"><p class="mb-1">'+ p.nombre +'</p><p class="mb-1">$'+ p.precio +'</p>'+boton.outerHTML + '</div></div><hr></div></li>'
    
    lista.innerHTML += html
}

var botones_eliminar = document.getElementsByClassName("boton-carrito")

for(let b of botones_eliminar){
    b.addEventListener("click", function(event) {
        console.log(b);
        var id = event.target.getAttribute("data-id")
        var productos = JSON.parse(localStorage.getItem('productosCompra'))
     index = 0
      for(let p of productos){
    
        if(p.id == id){
           productos.splice(index , 1);
           localStorage.setItem("productosCompra", JSON.stringify(productos))
           actualizarCarrito()
        }
        index++
       }
      

    })
}

}






var botones = document.getElementsByClassName("button_comprar")

for(let b of botones){
    
    b.addEventListener("click", function(event) {
        var nombre = event.target.getAttribute("data-nombre")
        var precio = event.target.getAttribute("data-precio")
        var url = event.target.getAttribute("data-url")
        var id = event.target.getAttribute("data-id")
       var productos = JSON.parse(localStorage.getItem('productosCompra'))
      var contiene = false;
       for(let p of productos){
        if(p.id == id){
            contiene = true;
        }
       }
       if(contiene == false){
            var producto_nuevo = {
                id: id,
                nombre: nombre,
                url: url,
                precio: precio,
            }
            productos.push(producto_nuevo)
            localStorage.setItem("productosCompra", JSON.stringify(productos))
          actualizarCarrito()
       }
     
    })
}




