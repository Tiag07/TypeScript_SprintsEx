function showVowelsQuantity(originalWord : string = '')
{   
    let thisFunctionHasCalledViaConsole : boolean = originalWord != ''; //Checa se a função foi chamada pelo console com parâmetros enviados
    if(!thisFunctionHasCalledViaConsole) //Se não foi chamada pelo console, a função vai pegar o texto do formulário Html
        originalWord = document.getElementById('inputWord').value;       
    
    //A palavra recebida se torna Maiúscula, tem os caracteres especiais e espaços removidos. Ela também é atribuida à formattedWord 
    let formattedWord : string = originalWord.toUpperCase().trim().normalize("NFD"); 

    let vowelsQuantity : number = formattedWord.match(/[AEIOU]/g)?.length; //vowelsQuantity recebe a quantidade de caracteres "AEIOU" da palavra digitada
    if(vowelsQuantity == null) vowelsQuantity = 0; //Evita que o texto apareça como "undefined" quando não há vogais
    
    if(!thisFunctionHasCalledViaConsole)//Aqui o texto do site exibe quantas vogais a palavra tem
    { 
        let txtResults = document.querySelector("p#finalResults")
        
        //Caso o input de texto esteja vazío, o site solicita que o usuário digite algo
        if(formattedWord == '' ) txtResults?.innerHTML = 'Digite algo na caixa de texto' 
        else txtResults?.innerHTML = `O texto "${originalWord}" contém ${vowelsQuantity} vogais!`
    } 

    console.log(`O texto "${originalWord}" contém ${vowelsQuantity} vogais!`) //Também mostra no console 
}
//Exemplos sendo chamados pelo console
showVowelsQuantity('Abacaxi');
showVowelsQuantity('Árvore');
showVowelsQuantity('Avó, Avô e Mãe');
showVowelsQuantity('Há um coração batendo <3');