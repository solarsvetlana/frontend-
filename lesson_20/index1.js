// https://jsonplaceholder.typicode.com/users

fetch("https://jsonplaceholder.typicode.com/users")
   // .then(response => console.log(response));
   .then(response => {
    if (response.ok){// proverili chto otvet poluchen
        return response.json(); // vernet json soderjimoe otveta
    }else{
        throw new Error("oshibka zagruzki dannih")


    }
   })
   .then ( loadedUser => {
        loadedUser.forEach(user => {
           let obj = new User ("", user.name,user.email) 
            userList.push(obj);
        });
        render();


   }
   )
   .catch (
    e=>console.log(e)
   );