let peopleList : Array<Object> = 
[
    {id : 1, name: "Ada Lovelace", bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id : 2, name: "Alan Turing", bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {id : 3, name: "Nikola Tesla", bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id : 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

function tabela_Start() {
    refreshTable();
}

function formulario_Start() {
    
}

function openForm(){
window.open('sprint1_ex4_formulario.html');
}

function deleteItem(){
let idForDeleting : number = Number(window.prompt('Qual o Id do item que você quer deletar?'));
}

function btnAddItemOnTable(){
    
    let inputNewName : string = document.querySelector('input#inputNewName').value;
    let inputNewBio : string = document.querySelector('input#inputNewBio').value;

}

function refreshTable(){
const table = document.getElementById('mainTable');
let dataRowHtml = document.getElementById('tableNewRows');
for(let person of peopleList)
{
    //dataRowHtml?.innerHTML += 'ss'
    var newDataRow = document.createElement('tr');
    newDataRow.id = 'mainTable';
    newDataRow.innerHTML = '<td> 1</td><td> asds</td> <td> nasdsa</td>'
    table?.appendChild(newDataRow);
}

}