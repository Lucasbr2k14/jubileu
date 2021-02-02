function Calcular(){
    /*
    Pegando os elementos 
    origem
    destino
    plano
    minutos
    */


   
   const origem = document.getElementById("origem").value
   const destino = document.getElementById("destino").value
   const plano = document.getElementById("plano").value
   const min = document.getElementById("min").value

    if(origem == "Origem" || destino == "Destino" || plano == "Planos" || min == ""){
        window.alert("Invalido")
    }
   
}
let butao = document.getElementById("calcular")
butao.addEventListener("click", () => {Calcular()})
