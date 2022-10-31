var outputTxt = document.querySelector("#output-txt")

var url = "https://jsonplaceholder.typicode.com/todos"

let result;
fetch(url)
    .then((response) => response.json())
    .then((todos) => {
        outputTxt.innerHTML = todos.map((todo) => {
            if (todo.completed) {
                result = `<p class="completed">${todo.title}</p>`
            } else {
                result = `<p class="notcompleted">${todo.title}</p>`
            }
            result += `<p>${todo.completed}</p>`
            return result;
        })
    })


//map syntax => () if we retrun any one , We should use these brackets
//    outputTxt.innerHTML = todos.map((todo) => (

//        `<p>${todo.completed}</p>
//         <p>${todo.id}</p>
//         <p>${todo.title}</p>`
//    ))
//})