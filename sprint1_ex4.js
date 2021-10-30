"use strict";
var peopleList = [
    { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function tabela_Start() {
    refreshTable();
}
function formulario_Start() {
}
function openForm() {
    window.open('sprint1_ex4_formulario.html');
}
function deleteItem() {
    var idForDeleting = Number(window.prompt('Qual o Id do item que você quer deletar?'));
}
function btnAddItemOnTable() {
    var inputNewName = document.querySelector('input#inputNewName').value;
    var inputNewBio = document.querySelector('input#inputNewBio').value;
}
function refreshTable() {
    var table = document.getElementById('mainTable');
    var dataRowHtml = document.getElementById('tableNewRows');
    for (var _i = 0, peopleList_1 = peopleList; _i < peopleList_1.length; _i++) {
        var person = peopleList_1[_i];
        //dataRowHtml?.innerHTML += 'ss'
        var newDataRow = document.createElement('tr');
        newDataRow.id = 'mainTable';
        newDataRow.innerHTML = '<td> 1</td><td> asds</td> <td> nasdsa</td>';
        table === null || table === void 0 ? void 0 : table.appendChild(newDataRow);
    }
}
