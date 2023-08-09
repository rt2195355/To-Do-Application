const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector('.todo-list');
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();//it prevents the page from refreshing
    // console.log(todoInput.value);
    const newTodoText = todoInput.value;
    if (newTodoText !== "") {
        const newLi = document.createElement('li');
        const newInnerHTML = `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn btn done">Done</button>
        <button class="todo-btn btn remove">Remove</button>
    </div>`;
        newLi.innerHTML = newInnerHTML;
        todoList.prepend(newLi);
        todoInput.value = "";
    }
});


todoList.addEventListener("click", (e) => {
    // check if user clicked on done button
    if (e.target.classList.contains("remove")) {
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if (e.target.classList.contains("done")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
})