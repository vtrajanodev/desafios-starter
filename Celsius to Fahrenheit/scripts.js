//transformDegree('50F')

function transformDegree(degree){

    const cExists = degree.toUpperCase().includes('C')  
    const fExsists = degree.toUpperCase().includes('F')

    const cDegree = Number(degree.toUpperCase().replace("C" , ""))
    const fDegree = Number(degree.toUpperCase().replace("F" , ""))
    
    let result;
    
    if(cExists){
        result = `${cDegree}°C equivale a -> ${cDegree * 9/5 + 32}F`
    }else if(fExsists){
        result = `${fDegree}F equivale a -> ${(fDegree - 32) * 5/9.} °C`
    }else{
        result = "[ERROR] Por favor escolha C ou F"
    }

    let resultado = document.querySelector("#resultado")
    
    resultado.value = result

    reset()

   
    
}

let button = document.querySelector(".button")

button.addEventListener('click' , () => {

    let number = document.querySelector('#input-aria').value

    transformDegree(number)

})

function reset(){

    let number = document.querySelector('#input-aria')

    number.value = ""

    number.focus() 
            
}