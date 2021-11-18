const btnmenu = document.querySelector("#btnmenu");
const menu = document.querySelector("#menu");
btnmenu.addEventListener("click",function(){
    menu.classList.toggle("mostrar");
});

const submenuBtn = document.querySelectorAll(".submenu");
for(let i=0; i < submenuBtn.length; i++){
    submenuBtn[i].addEventListener("click",function(){
       if(window.innerWidth < 1000){
           const dropdown = this.nextElementSibling;
           const height = dropdown.scrollHeight;
           if(dropdown.classList.contains("desplegar")){
            dropdown.classList.remove("desplegar");
            dropdown.removeAttribute("style");
           } else{
            dropdown.classList.add("desplegar");
            dropdown.style.height = height + "px"
           }
       }
    });
}