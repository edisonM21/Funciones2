//let suma=(numero1,numero2,numero3)=> numero1+numero2+numero3  
//console.log(suma(10,5,3))
function iniciar(){
    console.log("estamos iniciando el programa")
}
function procesar(){
    setTimeout(function(){
        console.log("estamos procesando el programa")
    },5000)
    
}
function finalizar(){
    console.log("estamos finalizando el programa")
}
iniciar()
procesar()
finalizar()
