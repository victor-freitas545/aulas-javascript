function calcular() {
    //mapeando os inputs
    const inputNumA = document.getElementById("numA");
    const inputNumB = document.getElementById("numB");

    //convertendo texto para número
    const valorA = Number(inputNumA.value);
    const valorB = Number(inputNumB.value);

    //realizando os cálculos
    const soma = valorA + valorB;
    const subtracao = valorA - valorB;
    const divisao = valorA / valorB;
    const multiplicacao = valorA * valorB;

    //exibir dados
    alert(
        "Resultado dos calculos :" +
        "\nSoma :" + soma + 
        "\nSubtração :" + subtracao +
        "\nDivisão :" + divisao + 
        "\nMultiplicação : " + multiplicacao     
    );
}