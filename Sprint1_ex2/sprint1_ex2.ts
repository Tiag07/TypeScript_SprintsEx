type personData = {
  id : number;
  name : string;
  bio : string;
}

let list : Array<personData> = 
[
    {id : 1, name: "Ada Lovelace", bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id : 2, name: "Alan Turing", bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {id : 3, name: "Nikola Tesla", bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id : 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

function showBio(bioId : number)
{
  for(let person : personData of list)
  {
    if(person.id === bioId)
    {
      return person.bio;
    } 
  }
  console.log("Insira um número que represente um dos id da lista!");
}

function showName(nameId : number)
{
  for(let person : personData of list)
  {
    if(person.id === nameId)
    {
      return person.name;
    } 
  }
  console.log("Insira um número que represente um dos id da lista!");
}

function deleteItem_Imperativo(itemId : number) //Essa deleta elementos da list original
{
  for(let person : personData of list)
  {
    if(person.id === itemId)
    {
      list.splice(list.indexOf(person),1);
      console.log(`${person.name} saiu da lista com sucesso!`);
      return;
    } 
  }
  console.log("Insira um número que represente um dos id da lista!");
  
}

function deleteItem_Funcional(listRecived : Array<personData>, itemId : number) //Essa recebe a list original como parâmetro e retorna uma nova com modificações. A original não sofre mudanças
{
  let newList : Array<personData> = Object.assign([], listRecived);

  for(let person : personData of newList)
  {
    if(person.id === itemId)
    {
      newList.splice(list.indexOf(person),1);
      console.log(`${person.name} saiu da lista com sucesso!`);
      return newList;
    } 
  }
  console.log("Insira um número que represente um dos id da lista!");
}

//No imperativo, a list original é alterada
function changeNameOrBio_Imperativo(itemId : number, newName? : string, newBio? : string)
{ 
  for(let person : personData of list)
  {
    if(person.id === itemId)
    {
     if(newName) person.name = newName;
     if(newBio) person.bio = newBio;

     console.log(`Dados do id ${person.id} Atualizados com sucesso!`);  
     return;
    } 
  } 
  console.log("Insira um número que represente um dos id da lista!");  
}

//No funcional, a list original é recebida como parâmetro e retorna uma nova lista após fazer as alterações. A original não sofre mudanças
function changeNameOrBio_Funcional(listRecived : Array<personData>, itemId : number, newName? : string, newBio? : string)
{
    let newList = [];
    listRecived.forEach(objects => newList.push(Object.assign({}, objects)));
    
    for(let person : personData of newList)
  {
    if(person.id === itemId)
    {
     if(newName) person.name = newName;
     if(newBio) person.bio = newBio;

     console.log(`Dados do id ${person.id} Atualizados com sucesso!`);  
     return newList;
    } 
  } 
  console.log("Insira um número que represente um dos id da lista!");  
}

//Chamando as funções para exibir nome e bio
console.log("EXIBIR NOME DO id 1: " + showName(1));
console.log("EXIBIR BIO DO id 1: " + showBio(1));

//Exemplos usando a programação funcional, a list original se mantém a mesma, abaixo criamos outras duas para exibir as novas modificações
console.log("---PARADIGMA FUNCIONAL---");
console.log("NOVA LISTA COM id 4 DELETADO: ");
let listWithDeletedItem : Array<personData> = deleteItem_Funcional(list, 4);
console.log(listWithDeletedItem);//Mostra a nova lista com o elemento 4 deletado

console.log("NOVA LISTA COM id 2 TENDO APENAS O NOME ALTERADO: ");
console.log(changeNameOrBio_Funcional(list,2, 'Garfield', ''));
console.log("NOVA LISTA COM id 2 TENDO APENAS A BIO ALTERADA: ");
console.log(changeNameOrBio_Funcional(list,2, '', 'Um gato que gosta muito de dormir.'));
console.log("NOVA LISTA COM id 2 TENDO O NOME E A BIO ALTERADOS: ");
console.log(changeNameOrBio_Funcional(list,2, 'Garfield', 'Um gato que gosta muito de dormir.'));

console.log("LISTA ORIGINAL INTACTA DEVIDO AO PARADIGMA FUNCIONAL: ");
console.log(list);


//Exemplos usando paradigma imperativo
console.log("---PARADIGMA IMPERATIVO---");
deleteItem_Imperativo(1);
changeNameOrBio_Imperativo(1, 'Pateta', 'Personagem da Disney.'); //Mostra a mensagem de que o id 1 não está mais na lista, então não é possível modificá-lo.
changeNameOrBio_Imperativo(2, 'Pikachu', 'Pokémon do tipo elétrico.');

console.log("LISTA ORIGINAL MODIFICADA PELO PARADIGMA IMPERATIVO: ");
console.log(list);

