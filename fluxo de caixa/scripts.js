function calculateBalance(income, expense){
    income = document.querySelector("#income-aria").value
    expense = document.querySelector('#expense-aria').value
    let result = document.querySelector("#result-aria")

    let total = income - expense
    
    result = document.querySelector("#result-aria")
    result.value = `${total.toLocaleString('pt-BR' , {style: 'currency' , currency: "BRL"})}`

    reset()
}

const calculate = document.querySelector("#calculate")
calculate.addEventListener('click' , calculateBalance)

function reset(){
    let income = document.querySelector("#income-aria")
    let expense = document.querySelector('#expense-aria')
    let result = document.querySelector('#result-aria')

    income.value = ''
    expense.value = ''

    income.focus()

    
}



