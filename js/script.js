let partida=document.querySelector(".container")
let cartas = document.querySelector(".col-3")
partida.onclick=(e)=>{
   console.log(e)
   //const carta=e.target
}   
fuction volverCarta(){
cartas.style.display = none

}
let cartas = document.getElementById(".col-3");

function cambiarImagen(imagen){
   cartas.src = imagen.src;
}