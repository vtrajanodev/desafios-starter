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

const totalCategories = booksByCategory.length

console.log(`O total de categorias é ${totalCategories}`)




for (const category of booksByCategory) {
    console.log(`${category.category}:`)
    console.log(category.books.length)
    
}


function countAuthors(){

    let authors = []

    for (let category of booksByCategory) {
        for (let book of category.books) {
           if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
           }
            
        }
    }   

    console.log("Total de autores:", authors.length)
}

countAuthors()


function searchBooks(author){

    let livros = []

    for (const category of booksByCategory){
        for (const book of category.books) {
           if(book.author === author){
               livros.push(book.title)
           }
        }
    }

    

    console.log(`Livros do autor ${author}: (${livros.length})
    ${livros}`)

}   



searchBooks("Augusto Cury")

