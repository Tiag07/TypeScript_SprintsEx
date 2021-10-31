let peopleList : Array<Object> = 
[
    {id : 1, name: "Ada Lovelace", bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id : 2, name: "Alan Turing", bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {id : 3, name: "Nikola Tesla", bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id : 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

function onEnable_Table() { //Chamada quando a página carrega.
    loadTableData();
}
function loadTableData(){ //Carrega os dados da tabela armazenada no local storage.
   
    if(localStorage.getItem("name0") == null) { //Caso não exista um primeiro nome salvo, a tabela padrão (peopleList) é armazenada.
        overwriteTableData(); //Salva os dados da tabela padrão.
        refreshTable(); //Atualiza a tabela da tela.
        return;
    }
    peopleList = []; //Caso exista dados salvos, a tabela padrão é zerada para os dados salvos a substituirem.
    for(let i = 0; i< localStorage.length/2; i++)//Como os dados salvos são 2 para cada objeto (name e bio), a length/2 retorna o número de objetos completos salvos.
    {
        btnAddItemOnTable(localStorage.getItem('name'+i ), localStorage.getItem('bio'+i ));//Os dados salvos são adicionados na lista, um de cada vez.
    }
    refreshTable()
    }
    
function overwriteTableData(){ //Aqui, os dados da lista atual (já com os dados armazenados nela) são armazenados no localstorage.
    
    for(let i = 0; i< peopleList.length; i++)
    {
        localStorage.setItem("name" + i, peopleList[i].name);//o name + i serve para criar slots referentes para cada objeto na lista.
        localStorage.setItem("bio" + i, peopleList[i].bio);
    }
}

function openForm(){ //Abrir janela de formulário
   window.open('sprint1_ex4_formulario.html', 'rating', 'left =200, height=400, width=900');
}

function resetTable(){ //Restaurar a tabela com os elementos da lista padrão
    localStorage.clear();
    window.location.reload();
}

function btnAddItemOnTable(newName : string ='', newBio : string ='')//Adicionar o nome e bio recebidos à um novo objeto na lista
{  
    let newPerson : object = {};
    newPerson.id = 0;
    newPerson.name = newName;
    newPerson.bio = newBio;
    peopleList.push(newPerson);

    overwriteTableData(); //Salvar as alterações    
    }

function deleteItem(){//Deleta um elemento da lista
    let idForDeleting : number = Number(window.prompt('Qual o Id do item que você quer deletar?'));//Recebe o id que o usuário deseja deletar.
    if(ValidateId(idForDeleting))//Valida se o id representa algum elemento da lista.
    {
        peopleList.splice(idForDeleting - 1, 1); //Como a tabela mostra o primeiro elemento com Id 1, então essa subtração é necessária.
        localStorage.clear();
        overwriteTableData();
        refreshTable();  
    }
    else alert('Insira um id válido!');   
    }
    
function ValidateId(id : any){ //Valida se o valor digitado no prompt é um número e se é um dos ids da list
        if(isNaN(id) || id > peopleList.length || id === 0) 
        return false;
        
        else return true;
    }

function refreshTable(){ //Atualiza a tabela na tela
const table = document.getElementById('mainTable');
table?.innerHTML = `<tr>
<td>Id</td>
<td>Nome</td>
<td>Biografia</td>
</tr>`; //Escreve a primeira linha fixa da tabela
let personId = 1; //O primeiro elemento da tabela aparecerá com id 1
for(let person : object of peopleList)
{
    person.id = personId++; //Atualiza os ids de cada elemento da lista
    let newDataRow = document.createElement('tr'); //Cria uma nova linha
    newDataRow.id = 'mainTable'; //Atribui o id da tabela ao id da linha para a formatação do css ser a mesma
    newDataRow.innerHTML = `<td> ${person.id}</td><td> ${person.name}</td> <td>${person.bio}</td>`; //Insere os novos dados
    table?.appendChild(newDataRow); //Insere a nova linha e mostra na tela
}

}
