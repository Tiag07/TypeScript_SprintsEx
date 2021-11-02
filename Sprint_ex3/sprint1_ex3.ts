
let userList : Array<any>  = [60, 60, 60, 20, 20, 20]; // Maior = 60, Menor = 20, Média = 40
const wrongUserList : Array<any>  = [60, 60, 'f', 20, true, 20]; // Lista híbrida, para dar exemplo de invalidação da lista

function higherLowerAndAverage(recivedList : Array<any>, fuctionalProgramming : boolean = true)//Recebe a lista e o dado que define se o paradigma será funcional ou não
{
  let validList : boolean = true; 
  for(let i = 0; i < recivedList.length; i++) //Etapa de validação, envia cada valor para a função "validateNumber" para checar se há algum elemento na lista que não seja um número.
  {
      if(validateNumber(recivedList[i]) == false)//Caso haja, imprime no console todos os valores que são inválidos e define a lista como inválida.
      {
        console.log(`${recivedList[i]} não é um número valido.`);
        validList = false;
      }
  }
  if(validList == false) return "Insira apenas números validos na lista."; //Se a lista for inválida, encerra o processo por aqui. 

     let newList : Array<number> = []; //Cria uma nova lista para receber os 3 valores requisitados
     newList.push(higherValue(recivedList));//Adiciona o maior valor
     newList.push(lowerValue(recivedList)); //Adiciona o menor
     newList.push(averageValue(recivedList)); //Adiciona o valor médio

     if(fuctionalProgramming) //Caso use paradigma funcional, retorna a nova lista sem modificações na original
     {
      return newList;
     }
     else //Caso não, a lista original se torna a lista com os 3 valores requisitados
     {
       userList = newList;
       return userList;
     }

}

function validateNumber(numberForValidation: any) : boolean //Valida se a variável enviada é do tipo 'number'
{
 return typeof(numberForValidation) == 'number' //Retorna se o valor passado é 'number' ou não
}

function higherValue(recivedList : Array<any>) : number//Recebe a lista atribui o maior valor encontrado à variavel "currentHigherNumber"
{
  let currentHigherNumber : number = recivedList[0]; //Começa recebendo o primeiro valor da lista para comparar com o restante
 
  for(let i=1; i<recivedList.length; i++)
  {
    if(recivedList[i] > currentHigherNumber)//Se o próximo valor for maior que o valor atual guardado, ele é substitui o valor guardado.
      currentHigherNumber = recivedList[i];  
  }

  return currentHigherNumber; //Retorna o maior valor
}

function lowerValue(recivedList : Array<any>) : number //Mesmo processo da function anterior
{
  let currentLowerNumber : number = recivedList[0]; 
 
  for(let i=1; i<recivedList.length; i++)
  {
    if(recivedList[i] < currentLowerNumber)
      currentLowerNumber = recivedList[i];
  }

  return currentLowerNumber;
}

function averageValue(recivedList : Array<any>) : number//Soma todos os valores da lista e divide pela quantidade de elementos presentes nela
{
  let currentSum : number = 0;
  let finalAverage : number = 0;

  for(let i=0; i<recivedList.length; i++)
    currentSum += recivedList[i];

  finalAverage = currentSum / recivedList.length;

  return finalAverage;
}

//Exemplos de funcionamento
console.log(higherLowerAndAverage(wrongUserList,true));//Enviando uma lista híbrida
console.log(higherLowerAndAverage(userList,true));//Enviando uma lista apenas com números (Paradigma funcional)
console.log(userList);//A lista original se mantém
console.log(higherLowerAndAverage(userList,false));//Enviando uma lista apenas com números (Paradigma imperativo)
console.log(userList);//A lista original é modificada