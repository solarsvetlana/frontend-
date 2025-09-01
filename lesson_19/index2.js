const form = document.getElementById("userform");
const userList = document.getElementById("userList");
const users=[];

function render(){
    userList.innerText="";
    users.forEach((user, index)=>{
        // добавить на страницу
        const li = document.createElement("li");  // создали объект элемент списка
        li.innerText = `${user.firstName} ${user.lastName} (${user.email})`; // добавили к нему text        
        
        // кнопка удалить
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText="Удалить";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => {
            users.splice(index,1);    // удалили элемент из массива
            render();
        };

        li.appendChild(deleteBtn);
        userList.appendChild(li);   // отобразили на странице
    });
}


function User(firstName, lastName, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}

form.addEventListener("submit", (e)=>{
    e.preventDefault(); 

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    
    users.push(new User(firstName,lastName,email));
    render();
    form.reset();
})