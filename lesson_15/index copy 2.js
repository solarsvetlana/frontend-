let block = document.getElementById("block");
let offset = 0;
requestAnimationFrame(move);

function move(){
  offset++;
  block.style.top = offset + "px"
  if (offset >=500){
      block.remove();
      return;
  }
  block.style.top = offset + "px"
  requestAnimationFrame(move);
}