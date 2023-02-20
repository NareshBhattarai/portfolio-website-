let icon=document.getElementById("icon");
let ul=document.querySelector("ul");
let menu=false;


const showMenu=()=>{
 
 icon.classList.replace("fa-bars","fa-close")
  ul.classList.toggle("show");
  menu=true;
}

const hideMenu=()=>{
icon.classList.replace("fa-close","fa-bars");
ul.classList.remove("show")
menu=false;
}
icon.addEventListener("click",()=>{
if(menu==false){
  showMenu();
}else{
  hideMenu();
 
}
})
