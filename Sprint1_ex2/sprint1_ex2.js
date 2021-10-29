"use strict";
var list = [
    { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function showBio(bioId) {
    bioId -= 1;
    return list[bioId].bio;
}
function showName(nameId) {
    nameId -= 1;
    return list[nameId].name;
}
function deleteItem_Imperativo(itemId) {
    itemId -= 1;
    list.splice(itemId, 1);
}
function deleteItem_Funcional(listRecived, itemId) {
    var newList = Object.assign([], listRecived);
    itemId -= 1;
    newList.splice(itemId, 1);
    return newList;
}
//No imperativo, a list original é alterada
function changeNameOrBio_Imperativo(itemId, nameOrBio, newValue) {
    itemId -= 1;
    switch (nameOrBio) //O switch identifica se o usuário desejou mudar o nome ou a bio, newValue é o novo nome/bio digitados
     {
        case 'name':
            list[itemId].name = newValue;
            break;
        case 'bio':
            list[itemId].bio = newValue;
            break;
        default: return;
    }
    //Mostra somente quais dados foram atualizados
    console.log("Atualiza\u00E7\u00E3o do item de id = " + itemId + ":\n    name: " + list[itemId].name + "\n    bio:  " + list[itemId].bio);
}
//No funcional, a list original é recebida como parâmetro e retorna uma nova lista após fazer as alterações. A original não sofre mudanças
function changeNameOrBio_Funcional(listRecived, itemId, nameOrBio, newValue) {
    var newList = [];
    listRecived.forEach(function (objects) { return newList.push(Object.assign({}, objects)); });
    itemId -= 1;
    switch (nameOrBio) {
        case 'name':
            newList[itemId].name = newValue;
            break;
        case 'bio':
            newList[itemId].bio = newValue;
            break;
        default: return;
    }
    console.log("Atualiza\u00E7\u00E3o do item de id = " + itemId + ":\n    Nome Atual: " + newList[itemId].name + "\n    Bio Atual:  " + newList[itemId].bio);
    return newList;
}
//Chamando as funções para exibir nome e bio
console.log(showBio(1));
console.log(showName(1));
//Exemplos usando a programação funcional, a list original se mantém a mesma, abaixo criamos outras duas para exibir as novas modificações
var listWithModifiedName = changeNameOrBio_Funcional(list, 1, 'name', 'Bob Esponja');
console.log(listWithModifiedName); //Mostra a lista completa com o novo nome incluso
var listWithModifiedBio = changeNameOrBio_Funcional(list, 1, 'bio', 'É um cara que mora em um abacaxi');
console.log(listWithModifiedBio); //Mostra a lista completa com a nova bio inclusa
var listWithDeletedItem = deleteItem_Funcional(list, 4);
console.log(listWithDeletedItem); //Mostra a lista com o elemento 2 deletado
//Exemplos usando paradigma imperativo
//deleteItem_Imperativo(1)
//changeNameOrBio_Imperativo(2, 'name', 'Chaves')
//changeNameOrBio_Imperativo(2, 'bio', 'Mora em um barril.')
console.log("LISTA ORIGINAL: ");
console.log(list);
