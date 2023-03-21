const name = document.getElementById("name");
const cardNumber = document.getElementById("card-number");
const dateMonth = document.getElementById("date-month");
const dateYear = document.getElementById("date-year");
const cvc = document.getElementById("cvc");
const form = document.querySelector("form");
const cardName = document.getElementById("name-placeholder");
const button = document.getElementById("submit-button");

const errorsName = [" "];
const errorsCard = [];
const errorsMonth = [];
const errorsYear = [];
const errorsCvc = [];

const nameError = document.getElementById("nameError");
const cardError = document.getElementById("cardError");
const dateError = document.getElementById("dateError");
const cvcError = document.getElementById("cvcError");

cardNumber.addEventListener("keypress", function(e){ //preventing from entering space by user
    var keyCode = e.keyCode || e.which;
        if (keyCode === 32){
            e.preventDefault();
        }
});

cvc.addEventListener("keypress", function(e){ //preventing from entering space by user
    var keyCode = e.keyCode || e.which;
        if (keyCode === 32){
            e.preventDefault();
        }
});

dateMonth.addEventListener("keypress", function(e){ //preventing from entering space by user
        if (dateMonth.value.length >= 2){
            e.preventDefault();
        }
});

dateYear.addEventListener("keypress", function(e){ //preventing from entering space by user
    if (dateYear.value.length >= 2){
        e.preventDefault();
    }
});


function dynamicNameFill(){
    cardName.innerHTML = name.value;
}

function dynamicCardNumberFill(){
    const numberBlock1 = document.getElementById("number-Block1");
    const numberBlock2 = document.getElementById("number-Block2");
    const numberBlock3 = document.getElementById("number-Block3");
    const numberBlock4 = document.getElementById("number-Block4");
    if(cardNumber.value.length > 0 && cardNumber.value.length <= 4)
    numberBlock1.innerHTML = cardNumber.value;
    if(cardNumber.value.length > 4 && cardNumber.value.length <= 9)
    numberBlock2.innerHTML = cardNumber.value.slice(5, 9);
    if(cardNumber.value.length > 9 && cardNumber.value.length <= 14)
    numberBlock3.innerHTML = cardNumber.value.slice(10, 14);
    if(cardNumber.value.length > 14 && cardNumber.value.length <= 19)
    numberBlock4.innerHTML = cardNumber.value.slice(15, 19);
}

function dynamicDateMonthFill(){
    const monthBlock = document.getElementById("month");
    monthBlock.innerHTML = dateMonth.value;
}

function dynamicDateYearFill(){
    const yearBlock = document.getElementById("year");
    yearBlock.innerHTML = dateYear.value;
}

function dynamicCvcFill(){
    const cvcBlock = document.getElementById("cvc-field");
    cvcBlock.innerHTML = cvc.value;
}

function cardFormatValidation(){ //adding spaces
        if(cardNumber.value.length === 4 || cardNumber.value.length === 9 || cardNumber.value.length === 14){
        cardNumber.value = cardNumber.value + " ";
        }
};

function success(element, errorMsg, errorLog){
    errorMsg.innerHTML = "";
    errorMsg.setAttribute('hidden', "");
    element.style.borderColor = "green";
    errorLog.splice(0, errorLog.length);
    button.removeAttribute("disabled");
}

function cardValidation(){
    var regCard = /^[0-9 ]+$/;
    if(!regCard.test(cardNumber.value)){
        cardError.removeAttribute('hidden');
        cardNumber.style.borderColor = "red";
        cardError.innerHTML = "Wrong format, numbers only";
        errorsCard.push("formatError");
        console.log("wrong format");
        button.setAttribute("disabled", "")
    } else {
        if(cardNumber.value.length != 19){
            cardError.removeAttribute('hidden');
            cardNumber.style.borderColor = "red";
            cardError.innerHTML = "Invalid card number";
            errorsCard.push("cardNumberError");
            button.setAttribute("disabled", "")
        } else{
            success(cardNumber, cardError, errorsCard);
        }
    }

}

function nameValidCheck(){
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regName.test(name.value)){
        nameError.removeAttribute('hidden');
        name.style.borderColor = "red";
        nameError.innerHTML = "Invalid name given";
        errorsName.push("nameError");
        button.setAttribute("disabled", "")
    } else{
        success(name, nameError, errorsName);
    }
}

function dateMonthValidation(){
    if(dateMonth.value === ""){
        dateError.removeAttribute('hidden');
        dateMonth.style.borderColor = "red";
        dateError.innerHTML = "Can't be blank";
        errorsMonth.push("Can't be blank");
        button.setAttribute("disabled", "")
    } else{
        if(dateMonth.value > 12){
            dateError.removeAttribute('hidden');
            dateMonth.style.borderColor = "red";
            dateError.innerHTML = "Invalid month";
            errorsMonth.push("Invalid month");
            button.setAttribute("disabled", "")
        } else{
            success(dateMonth, dateError, errorsMonth);
        }
    }
}

function dateYearValidation(){
        if(dateYear.value === ""){
        dateError.toggleAttribute('hidden');
        dateYear.style.borderColor = "red";
        dateError.innerHTML = "Can't be blank";
        errorsYear.push("Can't be blank");
        button.setAttribute("disabled", "")
    } else{
        success(dateYear, dateError, errorsYear);
    }
}

function cvcValidation(){
        if(cvc.value.length < 3){
        cvcError.toggleAttribute('hidden');
        cvc.style.borderColor = "red";
        cvcError.innerHTML = "Invalid CVC";
        errorsCvc.push("Invalid CVC");
        button.setAttribute("disabled", "")
    } else{
        success(cvc, cvcError, errorsCvc);
    }

}

function changeSection(){
    const section1 = document.getElementById("form-panel");
    const section2 = document.getElementById("complete-panel");
    section1.style.display = "none";
    section2.style.display = "flex";
}





form.addEventListener("submit", (e) => {
    if(errorsName.length > 0 || errorsCard.length > 0 || errorsDate.length > 0 || errorsCvc.length || 0){
        e.preventDefault();
    }
})