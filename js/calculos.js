// document.querySelector("#btnSomar").addEventListener("click", somarValores);

// function somarValores(){
//     var n1 = parseFloat(document.querySelector("#numero1").value);
//     var n2 = parseFloat(document.querySelector("#numero2").value);
//     var soma = n1+n2;
//    document.querySelector("#resultado").value = soma;
// } 

document.querySelector("#btnSomar").addEventListener("click", function ()
{
   var altura = parseFloat(document.querySelector("#alturaIMC").value);
   var peso = parseFloat(document.querySelector("#pesoIMC").value);
   var soma = peso/(altura*altura);
   document.querySelector("#resultado").value = soma;
});

// function somar(p1, p2){
//     var soma = p1+p2;
//     document.querySelector("#resultado").value = soma;
// }
