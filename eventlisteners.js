document.addEventListener('DOMContentLoaded', () => {

    e.preventDefault()
    
    document.querySelector('form').addEventListener('submit', (e) => { handleToDo (e.target.new_todo.value)
    
    })
    
    function handleToDo (todo)
    
    let p = document.createElement('p')
    
    p.textContent = todo
    
    console.log(p)
})
