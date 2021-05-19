const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionárias",
                author: "T. Hard Eker"
            },
            {
                title: "O homem mais rico do mundo",
                author: "George S. Clason"
            },
            {
                title: "Pai rico pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: " Você é insibstituível",
                author: "Augusto Cury"
            }, 
            {
                title: " Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: " Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }

        ]
    }
]

// Imprimir a qauntidade de categorias
const totalCategories = booksByCategory.length
console.log(`O total de categorias é ${totalCategories}`)



// Imprime a quantidade de livros por categoria
for (const category of booksByCategory) {
    console.log(`${category.category}:`) // Riqueza / Inteligência emocional
    console.log(category.books.length) // Quantidade por categoria (3) , (3)
    
}


//Função para definir quantidade de autores
function countAuthors(){

    let authors = [] // Iniciando array vazio

    //1° LOOP para acessar o OBJETO GERAL
    for (let category of booksByCategory){
        //Segundo loop para acessar o objeto referente aos titulos e autores
        for (let book of category.books) {
           if(authors.indexOf(book.author) == -1){ //validação para não contar autores repetidos
                authors.push(book.author) //adicionando autores encontrados no array
           }
            
        }
    }   

    console.log("Total de autores:", authors.length) //Imprimindo total de autores
}

countAuthors() //rodando a função


//Função para listar os livros com base no autor
function searchBooks(author){

    author.toLowerCase()

    let livros = []

    for (const category of booksByCategory) {
        for (const book of category.books) {
            if(book.author.toLowerCase() == author){
                livros.push(book.title)
            }
        }
    }

    if(livros == 0){
        console.log("Autor não encontrado")
    }else{
        console.log(`O autor: ${author} tem os títulos: 
        ${livros} registrados na plataforma`)
    }

}


searchBooks("stephen r. covey")
