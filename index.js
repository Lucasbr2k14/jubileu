function Calcular(){
    /*
    Pegando os elementos 
    DDD
    plano
    minutos
    */
   const ddd = document.getElementById("DDD").value
   const plano = document.getElementById("plano").value
   const min = document.getElementById("min").value

    /*
    Pegando os campos de escrita
    Com o valor sem o plano
    */
    const tela = {
        comPlano: document.getElementById("valor"),
        semPlano: document.getElementById("valorS")

    }

    /* Trasformando os valores em tipo numérico*/
    const Min = parseInt(min)
    const DDD = parseFloat(ddd)

    /* Variaveis que vazam o escopo para os calculos*/
    let comPlano = null
    let valor = null
    let valorMin = null 
    let porcentagem = null

    /*Verificando os se os valores estão completos*/
    if(ddd == "Origem | Destino" || plano == "Planos" || min == ""){
        window.alert("Ei, há alguns valores faltando")

    }else{

        valor = DDD * Min

        if(Min <= plano){
            comPlano = 0
            console.log("Menor igual")
        }else{
            console.log("Maior")

            valorMin = (Min - plano) * DDD
            porcentagem = (valorMin * 10)/100
            comPlano = valorMin + porcentagem

        }


        /*Escrevendo valores em html*/
        tela.semPlano.innerHTML = `Valor sem o plano: ${valor}R$`
        tela.comPlano.innerHTML = `Valor com o plano: ${comPlano}R$`
    }
   
}
let butao = document.getElementById("calcular")
butao.addEventListener("click", () => {Calcular()})
