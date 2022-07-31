const inputValue=document.querySelector(".inputNumber");
const buttonSend=document.querySelector("#container__button");
const respuestaHTML=document.querySelector(".respuestaHTML")
const numHTML=document.querySelectorAll(".num")
const score=document.querySelector(".score")
const contenedorNumeros=document.querySelector(".container__num")
let m=document.querySelector(".container__monedas")
let cantidadDeMonedas=5;
let  coincidencia=0;
window.onload=inicio;

//Function de inicio
function inicio(){
  dibujarMonedas()
}

//Boton para ejecutar todo
buttonSend.addEventListener("click", ()=>{
    coincidencia=0;
    contenedorNumeros.innerHTML=""
    inputVerification()
    inputValue.value=""
    inputValue.focus()
    
    
})

//En esta funcion se verifica los valores ingresados en el input.
function inputVerification(){

  if(inputValue.value<=10 && inputValue.value>=1){    
    comprobandoValor()
    crearCirculos(inputValue.value)


    console.log("Es correcto")
  }
  else{
    respuestaHTML.innerHTML="ingresa solo numeros validos"
  }

}

//Se crearan los cirulos con el numero al azar dentro
function crearCirculos(CantidadDeCirculos){
  for (let i = 0; i < CantidadDeCirculos; i++) {
    azar=Math.ceil(Math.random()*inputValue.value)
    let style=comprobandoValor(azar)
    contenedorNumeros.insertAdjacentHTML("beforeend",`<li class="num ${style}">${azar}</li>`)
  }

  if(coincidencia>0){
    var mensaje=`Se han producido ${coincidencia} coincidencias y has ganado ${coincidencia} monedas`;
    cantidadDeMonedas+=coincidencia;
  }
  else{
    var mensaje=`No se han producido niniguna coincidencias y has perdido ${inputValue.value} monedas`;
    cantidadDeMonedas-=Number(inputValue.value)
  }
  dibujarMonedas();
  document.querySelector(".respuestaHTML").innerHTML=mensaje
}

//Se comprueba que el value sea igual que el valor al azar para pintar el circulo
function comprobandoValor(azar){
    if(azar==inputValue.value){ 
      coincidencia++;
      return "verde";
    }
    else{
      return "rojo";
    }
}

//Se crearan las cantidades de monedas correspondientes en el html 
function dibujarMonedas(){
  m.innerHTML=`<div>Monedas:<span class="grande">${cantidadDeMonedas}</span></div>`;
  for(let i = 0; i < cantidadDeMonedas; i++){
    m.insertAdjacentHTML("beforeend", `<img src="img/bitcoin.png" class="monedaBitcoin" alt="Moneda">`)
  }
}

//Agregar contenido al HTML.
function responseHTML(EtiquetaHTML,textHTML){ 
EtiquetaHTML.insertAdjacentHTML("beforeend", `${textHTML}`);
}

 