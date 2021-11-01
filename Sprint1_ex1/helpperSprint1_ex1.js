"use strict";
function showVowelsQuantity(recivedWord) {
    var _a;
    if (recivedWord === void 0) { recivedWord = ''; }
    var originalWord = recivedWord;
    if (!recivedWord) //Caso a função não tenha parâmetro enviado (quando não é chamada pelo console), pega o texto do input do site.
        originalWord = document.getElementById('inputWord').value;
    //A palavra recebida se torna Maiúscula, tem os caracteres especiais e espaços removidos. Ela também é atribuida à formattedWord.
    var formattedWord = originalWord.toUpperCase().trim().normalize("NFD");
    var vowelsQuantity = (_a = formattedWord.match(/[AEIOU]/g)) === null || _a === void 0 ? void 0 : _a.length; //vowelsQuantity recebe a quantidade de caracteres "AEIOU" da palavra digitada.
    if (isNaN(vowelsQuantity))
        vowelsQuantity = 0; //Evita que o texto apareça como "undefined" quando não há vogais.
    if (!recivedWord) //Aqui o texto do site exibe quantas vogais a palavra tem.
     {
        var txtResults = document.querySelector("p#finalResults");
        //Caso o input de texto esteja vazío, o site solicita que o usuário digite algo.
        if (formattedWord === '')
            txtResults === null || txtResults === void 0 ? void 0 : txtResults.innerHTML = 'Digite algo na caixa de texto';
        else
            txtResults === null || txtResults === void 0 ? void 0 : txtResults.innerHTML = "O texto \"" + originalWord + "\" cont\u00E9m " + vowelsQuantity + " vogais!";
    }
    console.log("O texto \"" + originalWord + "\" cont\u00E9m " + vowelsQuantity + " vogais!"); //Também mostra no console .
}
//Exemplos sendo chamados pelo console
showVowelsQuantity('Abacaxi');
showVowelsQuantity('Árvore');
showVowelsQuantity('Avó, Avô e Mãe');
showVowelsQuantity('Há um coração batendo <3');
