let bar1 =document.getElementById("bar1");
let bar2 =document.getElementById("bar2")
let manu = document.querySelector(".m-manu");
let a = document.querySelector(".manu-a")

bar1.addEventListener("click", show);
bar2.addEventListener("click", hide);

function show() {
    manu.style.width="100vw"
    bar1.style.display="none"
    bar2.style.display="block"
    
}
function hide() {
    manu.style.width="0"
    bar1.style.display= "block"
    bar2.style.display= "none"
   
}