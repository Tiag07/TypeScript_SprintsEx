function showVowelsQuantity(word : string = '')
{
    let vowelsQuantity : number = 0 //Guardará o número de vogais da palavra digitada
    
    var functionHasCalledViaHtml : boolean = word =='' //Checa se a função está sendo chamada via html
    if(functionHasCalledViaHtml) //Se não houver palavra enviada, a função vai pegar o texto do formulário
        word = document.getElementById('inputWord').value        
     
    let formattedWord : string = word //formattedWord é a string que será usada na checagem de vogais
    .toUpperCase() //Transforma as letras da palavra em maiúsculas para facilitar a checagem
    .trim() //Remove os espaços da palavra
    .normalize("NFD") //Remove os acentos e caracteres especiais

    let wordChars: Array<string> = formattedWord.split('') //Converte a palavra em um array de letras
    let standardVowels : string[] = ['A','E','I','O','U'] //Define o que é uma vogal
    
    for(let wc=0; wc < wordChars.length; wc++) //Passa por cada letra da palavra (wc = WordChars)
        for(let sv=0; sv < wordChars.length; sv++) //Passa pelas vogais (sv = StandardVowels)
    if(wordChars[wc] == standardVowels[sv]) vowelsQuantity++ //Checa se a letra da palavra é igual a uma vogal

    if(functionHasCalledViaHtml){ //Aqui o texto do site exibe quantas vogais a palavra tem
        let txtResults = document.querySelector("p#finalResults")
        txtResults?.innerHTML = `O texto "${word}" contém ${vowelsQuantity} vogais!`
    }

    console.log(`O texto "${word}" contém ${vowelsQuantity} vogais!`) //Também mostra no console 
}
//Exemplos sendo chamados pelo console
showVowelsQuantity('Abacaxi');
showVowelsQuantity('Árvore');
showVowelsQuantity('Avó, Avô e Mãe');
showVowelsQuantity('Há um coração batendo <3');