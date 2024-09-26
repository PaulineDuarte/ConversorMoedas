const amount = document.getElementById("amount")


// Manipulando o input amount para receber somente numeros
amount.addEventListener("input", ()=> {


    const hasCaracteresRegex = /\D+/g  

    // Atribiu um novo valor a amount.value que só vai receber numeros
    amount.value = amount.value.replace(hasCaracteresRegex , "")

})


// Pegar o tipo de moeda selecionado pelo usuário

const currency = document.getElementById("currency")


// Obtendo os elementos do formulario
 const form = document.querySelector("form")

// Capturando o envento de submit do formulário
 form.onsubmit = (e) => {
    e.preventDefault() 

    switch(currency.value){
        case "USD" : 
            convertCurrency(amount.value,USD,"US$")
            break 
        case "EUR" : 
            convertCurrency(amount.value,EUR,"€")
           break 
        case "GBP" : 
            convertCurrency(amount.value,GBP,"£")
            break 
    }
//  console.log(currency.value)
}

// cotação de moeda do dia 
const USD = 5.43 ;
const EUR = 6.05;
const GBP = 7.19;

//Função para converter a moeda 

function convertCurrency (amount,price,symbol){
    try {
       
        // Atualizando o conteudo (a cotação da moeda selecionado)
        description.textContent=`${symbol} 1 = ${formatCurrentBRL(price)}`

        // Calcular o total dinamicamente 

        let total = amount * price

        if (isNaN(total)) {
            return alert ("Por favor, Digite um numero Válido")

        }


        // formatar o valor de total 
        total = formatCurrentBRL(total).replace("R$","")

        // exibir o resultado 

        resultado.textContent = `${total} Reais` 
        
       
        // aplica a classe que exibe o footer com o resultado
        footer.classList.add("show-result")
    } catch (error) {
        console.log(error)
        // remove a classe do footer removendo ele 
        footer.classList.remove("show-footer")
        alert("Tente mais tarde")
    }

}

// selecionar o footer 

const footer = document.querySelector("main footer")


// Mudar a descrição que está fixa 

const description = document.getElementById("description")


// Função para formatar a moeda em real Brasileiro

function formatCurrentBRL (value) {
    return Number(value).toLocaleString("pt-BR", {
        style : "currency" , 
        currency: "BRL",
    })
}


// Exibir o resultado na função convert 

const resultado = document.getElementById("result")




