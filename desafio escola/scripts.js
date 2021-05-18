function getScore(score){



    let scoreA = score > 90 && score <= 100
    let scoreB = score <= 89 && score >= 80
    let scoreC = score <= 79 && score >= 70
    let scoreD = score <= 69 && score >= 60
    let scoreF = score <= 59 && score > 0
   
    if(scoreA){
        scoreFinal = "O aluno tirou A"
    }else if(scoreB){
        scoreFinal = "O aluno tirou B"
    }else if(scoreC){
        scoreFinal = "O aluno tirou C"
    }else if(scoreD){
        scoreFinal  = "O aluno tirou D"
    }else if(scoreF){
        scoreFinal = "O aluno tirou F"
    }else{
        scoreFinal = "Nota inválida"
    }
    
    return scoreFinal

}

console.log(getScore(100))
console.log(getScore(-1))
console.log(getScore(40))
console.log(getScore(100))
console.log(getScore(30))
console.log(getScore(120))