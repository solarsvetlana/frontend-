let element = document.getElementById("div0");
element.innerHTML="<h1>hello!</h1>";

// all elements with tag p
allP = document.getElementsByTagName("p");
console.log(allP);
for (let el of allP){
    el.style.color ="red";
    el.style.fontSize ="30px";
}

// daughter elements of div
element = document.getElementById("div1");
console.log(element.childNodes);
console.log(element.children);