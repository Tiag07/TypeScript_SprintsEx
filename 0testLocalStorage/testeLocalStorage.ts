let listOriginal : Array<Object> = 
[
    {id : 1, name: "Ada Lovelace", bio : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {id : 2, name: "Alan Turing", bio : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
    {id : 3, name: "Nikola Tesla", bio : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {id : 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];
let novaLista : Array<Object> = 
[
    {id : 1, name: "Goku", bio : "Dragon ball"},
    {id : 1, name: "Ash", bio : "Pokémon"},
    {id : 1, name: "Gon", bio : "HxH"},
    {id : 1, name: "Ichigo", bio : "Bleach"},
];
function start(){
    //localStorage.clear();
}
function salvarLista(){
    localStorage.setItem("ListaSalva", JSON.stringify(novaLista));
}
function carregarLista(){
    const txtLista = document.getElementById("lista");
    let listaCarregada = JSON.parse(localStorage.getItem("ListaSalva") || "[]" );
    txtLista?.innerHTML = listaCarregada[2].name;

}