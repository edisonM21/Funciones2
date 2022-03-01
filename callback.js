/*function funcionPrincipal(callback){
    
    setTimeout(function(){
        console.log("Soy la funcion Principal")
        callback()
    },2000)
}
funcionPrincipal(function(){
    console.log("Soy la segunda funcion")
})*/

function sumar(numero1,numero2,callback){
    setTimeout(function(){
        let suma=numero1+numero2
        callback(numero1,numero2,suma)
    },5000)
}
sumar(7,5, function(numero1,numero2,suma){
    console.log(`la suma es: ${suma}`)
    let resta=numero1-numero2
    console.log(`la resta es: ${resta}`)
})