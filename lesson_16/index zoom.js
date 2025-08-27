const btnBig = document.getElementById("btnBig");
const btnNormal = document.getElementById("btnNormal");

//const textBlock = document.getElementsByClassName ("text");
const textBlock = document.querySelectorAll(".text");
console.dir(textBlock);

// el.className);// svoistvo classelementa
//console.log(textBlock[0].classList);// poluchit´spisok klassov v vide spiska
/*
btnBig.onclick = () =>{
    textBlock.forEach ( b  => b.classList.add("big"));
}
btnNormal.onclick = () =>{
    textBlock.forEach ( b  => b.classList.remove("big"));
}
*/
btnBig.addEventListener("click", () => {
    textBlock.forEach ( b  => b.classList.add("big"));
}
);
btnBig.addEventListener("click", () => {
    console.log("Najali na button big");
}
);


btnNormal.onclick = () =>{
    textBlock.forEach ( b  => b.classList.remove("big"));
};
