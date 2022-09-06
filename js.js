const prNav=document.querySelector(".pr-nav");
const navToggle=document.querySelector(".mobile-nav-toggle");
const year=document.querySelector(".year");
const header=document.querySelector(".header");
const ajustforcolor=document.querySelectorAll("li a");
const logo=document.querySelector(".logo");
const linkscolor=document.querySelectorAll(".pr-nav li a");
const footer_btn=document.querySelector("footer button");
navToggle.addEventListener("click",() =>{
    const visibility=prNav.getAttribute("data-visible");
    if(visibility==="false"){
        prNav.setAttribute("data-visible",true);
        navToggle.setAttribute("aria-expended",true);
        navToggle.classList.add("rotate");
    }
    if(visibility==="true"){
        prNav.setAttribute("data-visible",false);
        navToggle.setAttribute("aria-expended",false);
        navToggle.classList.remove("rotate");
    }
    
});
year.innerHTML=new Date().getFullYear();
window.addEventListener("scroll",function(){
const scrollHeight=window.pageYOffset;
const headerHeight=header.getBoundingClientRect().height;
if(scrollHeight > headerHeight ){
    header.classList.add("scrolling-header");
    navToggle.style.color="black";
    if( this.window.innerWidth>800){
    for (var i = 0, max = ajustforcolor.length; i < max; i++) {
        ajustforcolor[i].style.color = "black";
    }};
    logo.classList.add("logo2");//console.log(scrollHeight);
    if(scrollHeight>1000 && this.window.innerWidth<800 ){
        for (var i = 0, max = linkscolor.length; i < max; i++) {
            linkscolor[i].style.color = "black ";
        }
        
    }
    if(scrollHeight<1000 && this.window.innerWidth<800){
        for (var i = 0, max = linkscolor.length; i < max; i++) {
            
        }
    }
    if(scrollHeight>1000){
        footer_btn.classList.add("footer-btn");
    }else{footer_btn.classList.remove("footer-btn");}
   
}else{
    navToggle.style.color="white";
    header.classList.remove("scrolling-header");
    for (var i = 0, max = ajustforcolor.length; i < max; i++) {
        ajustforcolor[i].style.color = "white";
    }
    logo.classList.remove("logo2");

}
})

