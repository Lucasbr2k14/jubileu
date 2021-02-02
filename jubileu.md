# Desafio Jubileu

<p>
A empresa de telefonia Jubileu, especializada em chamadas de longa distância nacional,
vai colocar um novo produto no mercado chamado FaleMais.
<p/>

<p>
Normalmente um cliente Jubileu pode fazer uma chamada de uma cidade para outra
pagando uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista
com os códigos DDDs de origem e destino:
</p>
<table>
    <tr>
        <th>Origem</th>
        <th>Destino</th>
        <th>$/min</th>
    </tr>
    <tr>
        <td>011</td>
        <td>016</td>
        <td>1.90</td>
    </tr>
    <tr>
        <td>016</td>
        <td>011</td>
        <td>2.90</td>
    </tr>
    <tr>
        <td>011</td>
        <td>017</td>
        <td>1.70</td>
    </tr>
    <tr>
        <td>017</td>
        <td>011</td>
        <td>2.70</td>
    </tr>
    <tr>
        <td>011</td>
        <td>018</td>
        <td>0.90</td>
    </tr>
    <tr>
        <td>018</td>
        <td>011</td>
        <td>1.90</td>
    </tr>
</table>

<p>
Com o novo produto FaleMais da Jubileu o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).
</p>

<p>
A Jubileu, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o plano FaleMais. O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2) sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para este problema.
</p>

<table>
    <tr>
        <th>Origem</th>
        <th>Destino</th>
        <th>Tempo</th>
        <th>Plano FaleMais</th>
        <th>Com FaleMais</th>
        <th>Sem FaleMais</th>
    </tr>   
    <tr>
        <td>011</td>
        <td>016</td>
        <td>20</td>
        <td>FaleMais 30</td>
        <td>R$ 0,00</td>
        <td>R$ 38,00</td>
    </tr>
    <tr>
        <td>011</td>
        <td>017</td>
        <td>80</td>
        <td>FaleMais 60</td>
        <td>R$ 37,40</td>
        <td>R$ 136,00</td>
    </tr>
    <tr>
        <td>018</td>
        <td>011</td>
        <td>200</td>
        <td>FaleMais 120</td>
        <td>R$ 167,20</td>
        <td>R$ 380,00</td>
    </tr> 
   
</table>
