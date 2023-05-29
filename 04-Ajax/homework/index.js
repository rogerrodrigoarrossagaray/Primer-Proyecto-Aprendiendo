const URL_BASE = "http://localhost:5000";
const primerBoton = document.getElementById("botonver")
const segundoBoton = document.getElementById("botonnover")
const listaAmigos = document.getElementById("lista");
const imagenCarga = document.getElementById("imagen")
const primerInput = document.querySelector("#input")
const spanBuscar = document.getElementById("amigo");
const botonBuscar = document.getElementById("search");
const segundoInput = document.querySelector("#inputDelete")
const eliminoExito = document.getElementById('success')
const botonDelete = document.getElementById('delete')
const divContenedor = document.getElementById("loader")




const crearElemento = (amigo) => {
  const cadaUno = document.createElement("li");
  cadaUno.innerHTML = amigo.name;
  listaAmigos.appendChild(cadaUno);
};
const cargarAmigos = ()=>{
    $.get(`${URL_BASE}/amigos`, function(amigos) {
        divContenedor.className= "aa"
        divContenedor.id = "aa"
        divContenedor.innerHTML = ""
      amigos.forEach(crearElemento);
    });
    imagenCarga.style.display = "none";
};
const elminarAcciones = ()=> {
    while (listaAmigos.firstChild) {
        listaAmigos.removeChild(listaAmigos.firstChild);}
         divContenedor.className= "loader";
        divContenedor.id = "loader";
        imagenCarga.style.display = "block";
       
};
const buscareligual = elemento => {
    if(primerInput.value == elemento.id){
        spanBuscar.innerHTML = elemento.name;
    }
}
const buscarLista= ()=>{$.get(`${URL_BASE}/amigos`, function (amigos){
amigos.forEach(buscareligual)
})}
const borrarAmigos = ()=> 
{$.ajax({
    url: `${URL_BASE}/amigos/${parseInt(segundoInput.value)}`,
    type: 'DELETE',
    success: function(result) {
        eliminoExito.innerHTML = "El amigo fue eliminado con exito!"
    }
})}

primerBoton.addEventListener("click", cargarAmigos);
segundoBoton.addEventListener("click",elminarAcciones);
botonBuscar.addEventListener("click", buscarLista );
botonDelete.addEventListener("click", borrarAmigos);


