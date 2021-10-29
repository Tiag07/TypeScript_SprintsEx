"use strict";
function showVowelsQuantity(word) {
    if (word === void 0) { word = ''; }
    var vowelsQuantity = 0; //Guardará o número de vogais da palavra digitada
    var functionHasCalledViaHtml = word == ''; //Checa se a função está sendo chamada via html
    if (functionHasCalledViaHtml) //Se não houver palavra enviada, a função vai pegar o texto do formulário
        word = document.getElementById('inputWord').value;
    var formattedWord = word //formattedWord é a string que será usada na checagem de vogais
        .toUpperCase() //Transforma as letras da palavra em maiúsculas para facilitar a checagem
        .trim() //Remove os espaços da palavra
        .normalize("NFD"); //Remove os acentos e caracteres especiais
    var wordChars = formattedWord.split(''); //Converte a palavra em um array de letras
    var standardVowels = ['A', 'E', 'I', 'O', 'U']; //Define o que é uma vogal
    for (var wc = 0; wc < wordChars.length; wc++) //Passa por cada letra da palavra (wc = WordChars)
        for (var sv = 0; sv < wordChars.length; sv++) //Passa pelas vogais (sv = StandardVowels)
            if (wordChars[wc] == standardVowels[sv])
                vowelsQuantity++; //Checa se a letra da palavra é igual a uma vogal
    if (functionHasCalledViaHtml) { //Aqui o texto do site exibe quantas vogais a palavra tem
        var txtResults = document.querySelector("p#finalResults");
        txtResults === null || txtResults === void 0 ? void 0 : txtResults.innerHTML = "O texto \"" + word + "\" cont\u00E9m " + vowelsQuantity + " vogais!";
    }
    console.log("O texto \"" + word + "\" cont\u00E9m " + vowelsQuantity + " vogais!"); //Também mostra no console 
}
//Exemplos sendo chamados pelo console
showVowelsQuantity('Abacaxi');
showVowelsQuantity('Árvore');
showVowelsQuantity('Avó, Avô e Mãe');
showVowelsQuantity('Há um coração batendo <3');
