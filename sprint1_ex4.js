"use strict";
var peopleList = [
    { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
var txtSaved = '';
function onEnable_Table() {
    //localStorage.clear();
    loadTableData();
}
function loadTableData() {
    if (localStorage.getItem("name0") == null) {
        refreshTable();
        return;
    }
    peopleList = [];
    for (var i = 0; i < localStorage.length / 2; i++) {
        btnAddItemOnTable(localStorage.getItem('name' + i), localStorage.getItem('bio' + i));
    }
}
function overwriteTableData() {
    localStorage.clear();
    for (var i = 0; i < peopleList.length; i++) {
        localStorage.setItem("name" + i, peopleList[i].name);
        localStorage.setItem("bio" + i, peopleList[i].bio);
        //changeTxtName("<br>Name: " + localStorage.getItem('name' + peopleCount) + "<br>Bio: " + localStorage.getItem('bio' + peopleCount));
    }
}
function openForm() {
    btnAddItemOnTable('a', 'bio');
    //window.open('sprint1_ex4_formulario.html', 'rating', 'left =200, height=400, width=900');
}
function btnAddItemOnTable(newName, newBio) {
    if (newName === void 0) { newName = ''; }
    if (newBio === void 0) { newBio = ''; }
    if (newName === '')
        newName = document.getElementById("inputNewName");
    if (newBio === '')
        newBio = document.getElementById("inputNewBio");
    var newPerson = {};
    newPerson.id = 0;
    newPerson.name = newName;
    newPerson.bio = newBio;
    peopleList.push(newPerson);
    refreshTable();
}
function changeTxtName(txt) {
    var a = document.getElementById('txtTabela');
    a === null || a === void 0 ? void 0 : a.innerHTML += txt;
}
function deleteItem() {
    var idForDeleting = Number(window.prompt('Qual o Id do item que você quer deletar?'));
    if (ValidateId(idForDeleting)) {
        peopleList.splice(idForDeleting - 1, 1);
        //overwriteTableData();
        refreshTable();
        //loadTableData();
    }
    else
        alert('Insira um id válido!');
}
function ValidateId(id) {
    if (id > peopleList.length || id === 0)
        return false;
    else
        return true;
}
function refreshTable() {
    var table = document.getElementById('mainTable');
    table === null || table === void 0 ? void 0 : table.innerHTML = '';
    var personId = 1;
    for (var _i = 0, peopleList_1 = peopleList; _i < peopleList_1.length; _i++) {
        var person = peopleList_1[_i];
        person.id = personId++;
        var newDataRow = document.createElement('tr');
        newDataRow.id = 'mainTable';
        newDataRow.innerHTML = "<td> " + person.id + "</td><td> " + person.name + "</td> <td>" + person.bio + "</td>";
        table === null || table === void 0 ? void 0 : table.appendChild(newDataRow);
    }
}
