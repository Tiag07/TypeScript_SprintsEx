let peopleList : Array<Object> = 
[
    {id : 1, name: "Ada Lovelace", bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id : 2, name: "Alan Turing", bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {id : 3, name: "Nikola Tesla", bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id : 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];
let tableWindow;
let formWindow;

function onEnable_Table() {
    tableWindow = window;
    refreshTable();
}
function onEnableForm() {
    
}

function openForm(){
formWindow = window.open('sprint1_ex4_formulario.html', '_blank', 'left =200, height=400, width=900, toolbar=no');
}

function btnAddItemOnTable()
{
    let newPerson : object = {};
    newPerson.id = 0;
    newPerson.name = newName;
    newPerson.bio = newBio;
    peopleList.push(newPerson);
    }
    
    function changeTxtName()
    {
        let a = document.getElementById('txtTabela');
        a?.innerHTML = 'aaaaaaa';
    }
 
function deleteItem(){
    let idForDeleting : number = Number(window.prompt('Qual o Id do item que você quer deletar?'));
    if(ValidateId(idForDeleting))
    {
        peopleList.splice(idForDeleting - 1, 1);
        refreshTable();
    }
    else alert('Insira um id válido!');   
    }
    
function ValidateId(id : any){
        if(id > peopleList.length || id == 0) 
        return false;
        
        else return true;
    }

function refreshTable(){
const table = document.getElementById('mainTable');
table?.innerHTML = '';
let personId = 1;
for(let person : object of peopleList)
{
    person.id = personId++;
    let newDataRow = document.createElement('tr');
    newDataRow.id = 'mainTable';
    newDataRow.innerHTML = `<td> ${person.id}</td><td> ${person.name}</td> <td>${person.bio}</td>`;
    table?.appendChild(newDataRow);
}

}
