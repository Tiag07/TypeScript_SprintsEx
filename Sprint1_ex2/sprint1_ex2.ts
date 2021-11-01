let list : Array<Object> = 
[
    {id : 1, name: "Ada Lovelace", bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id : 2, name: "Alan Turing", bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {id : 3, name: "Nikola Tesla", bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id : 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

function showBio(bioId : number)
{
  bioId -=1;
  return list[bioId].bio;
}

function showName(nameId : number)
{
  nameId -=1;
  return list[nameId].name;
}

function deleteItem_Imperativo(itemId : number) //Essa deleta elementos da list original
{
  for(let obj : object of list)
  {
    if(obj.id == itemId)
    {
      list.splice(list.indexOf(obj),1);
      console.log(`${obj.name} saiu da lista com sucesso!`);
      return;
    } 
  }
  console.log("Insira um número que represente um dos id da lista!");
  
}

function deleteItem_Funcional(listRecived : Array<Object>, itemId : number) //Essa recebe a list original como parâmetro e retorna uma nova com modificações. A original não sofre mudanças
{
  let newList : Array<Object> = Object.assign([], listRecived);

  for(let obj : object of newList)
  {
    if(obj.id == itemId)
    {
      newList.splice(list.indexOf(obj),1);
      console.log(`${obj.name} saiu da lista com sucesso!`);
      return newList;
    } 
  }
  console.log("Insira um número que represente um dos id da lista!");
}

//No imperativo, a list original é alterada
function changeNameOrBio_Imperativo(itemId : number, nameOrBio : string, newValue : string)
{
    itemId -=1;
    switch(nameOrBio)//O switch identifica se o usuário desejou mudar o nome ou a bio, newValue é o novo nome/bio digitados
    {
    case 'name':
    list[itemId].name = newValue;
    break;

    case 'bio':
    list[itemId].bio = newValue;
    break;

    default : return;
    }
    //Mostra somente quais dados foram atualizados
    console.log(`Atualização do item de id = ${itemId}:
    name: ${list[itemId].name}
    bio:  ${list[itemId].bio}`);
}

//No funcional, a list original é recebida como parâmetro e retorna uma nova lista após fazer as alterações. A original não sofre mudanças
function changeNameOrBio_Funcional(listRecived : Array<Object>, itemId : number, nameOrBio : string, newValue : string)
{
    let newList = [];
    listRecived.forEach(objects => newList.push(Object.assign({}, objects)));
    itemId -=1;
    switch(nameOrBio)
    {
    case 'name':
    newList[itemId].name = newValue;
    break;

    case 'bio':
    newList[itemId].bio = newValue;
    break;

    default : return
    }
    console.log(`Atualização do item de id = ${itemId}:
    Nome Atual: ${newList[itemId].name}
    Bio Atual:  ${newList[itemId].bio}`);
    return newList;
}

//Chamando as funções para exibir nome e bio
//console.log(showBio(1));
//console.log(showName(1));

//Exemplos usando a programação funcional, a list original se mantém a mesma, abaixo criamos outras duas para exibir as novas modificações
//let listWithModifiedName : Array<Object> = changeNameOrBio_Funcional(list, 1, 'name', 'Bob Esponja');
//console.log(listWithModifiedName);//Mostra a lista completa com o novo nome incluso

//let listWithModifiedBio : Array<Object> = changeNameOrBio_Funcional(list, 1, 'bio', 'É um cara que mora em um abacaxi');
//console.log(listWithModifiedBio);//Mostra a lista completa com a nova bio inclusa

let listWithDeletedItem : Array<Object> = deleteItem_Funcional(list, 4);
console.log(listWithDeletedItem);//Mostra a lista com o elemento 2 deletado


//Exemplos usando paradigma imperativo
//deleteItem_Imperativo(1);
//changeNameOrBio_Imperativo(2, 'name', 'Chaves')
//changeNameOrBio_Imperativo(2, 'bio', 'Mora em um barril.')

console.log("LISTA ORIGINAL: ");
console.log(list);

