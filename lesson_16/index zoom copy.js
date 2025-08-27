const btnBig = document.getElementById("btnBig");
const btnNormal = document.getElementById("btnNormal");

//const textBlock = document.getElementsByClassName ("text");
const textBlock = document.querySelectorAll(".text");
console.dir(textBlock);

/*
btnBig.onclick = () =>{
    textBlock.forEach ( b  => b.style.fontSize = "2em");
}
btnNormal.onclick = () =>{
    textBlock.forEach ( b  => b.style.fontSize = "1em");
}
*/
btnBig.onclick = () =>{
    textBlock.forEach ( b  => b.style.setProperty("font-size", "2em"));
}
btnNormal.onclick = () =>{
    textBlock.forEach ( b  => b.style.removeProperty("font-size"));
}
