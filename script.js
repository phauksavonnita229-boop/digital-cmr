const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

cards.forEach(card=>{

observer.observe(card);

});

const camera=document.querySelector(".camera");

document.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/30;

let y=(window.innerHeight/2-e.pageY)/30;

camera.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`;

});

window.addEventListener("scroll",()=>{

camera.style.transform=`translateY(${window.scrollY*0.2}px)`;

});