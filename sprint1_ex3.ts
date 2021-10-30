const numericList : Array<any>  = [-15, -6, 'f', 11, 24, 32, 185];

function HigherLowerAndMedium(numericListRecived : Array<any>)
{
  let validList : boolean = true; 
  for(let i = 0; i < numericListRecived.length; i++)
  {
      if(ValidateNumber(numericListRecived[i]) == false)
      {
        console.log(`${numericListRecived[i]} não é um número valido.`);
        validList = false;
      }
  }

  if(validList == false)
  {
      console.log("Insira apenas números validos na lista.");
      return;
  }
  
}

function ValidateNumber(numberForValidation: any)
{
 return typeof(numberForValidation) == 'number'
}
HigherLowerAndMedium(numericList);