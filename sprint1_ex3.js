"use strict";
var numericList = [-15, -6, 'f', 11, 24, 32, 185];
function HigherLowerAndMedium(numericListRecived) {
    var validList = true;
    for (var i = 0; i < numericListRecived.length; i++) {
        if (ValidateNumber(numericListRecived[i]) == false) {
            console.log(numericListRecived[i] + " n\u00E3o \u00E9 um n\u00FAmero valido.");
            validList = false;
        }
    }
    if (validList == false) {
        console.log("Insira apenas números validos na lista.");
        return;
    }
}
function ValidateNumber(numberForValidation) {
    return typeof (numberForValidation) == 'number';
}
HigherLowerAndMedium(numericList);
