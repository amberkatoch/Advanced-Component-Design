// Modal

const modal=document.getElementById("modal");
const openModal=document.getElementById("openModal");
const closeModal=document.getElementById("closeModal");

let modalState=false;

openModal.addEventListener("click",()=>{
modal.style.display="flex";
modalState=true;
});

closeModal.addEventListener("click",()=>{
modal.style.display="none";
modalState=false;
});

window.addEventListener("click",(e)=>{
if(e.target===modal){
modal.style.display="none";
modalState=false;
}
});

// Accordion

const accordions=document.querySelectorAll(".accordion");

accordions.forEach(btn=>{
btn.addEventListener("click",()=>{
const panel=btn.nextElementSibling;

panel.style.display=
panel.style.display==="block"
? "none"
: "block";
});
});

// Tabs

const tabBtns=document.querySelectorAll(".tab-btn");
const tabContents=document.querySelectorAll(".tab-content");

tabBtns.forEach(btn=>{
btn.addEventListener("click",()=>{

tabBtns.forEach(b=>b.classList.remove("active"));
tabContents.forEach(c=>c.classList.remove("active"));

btn.classList.add("active");

document
.getElementById(btn.dataset.tab)
.classList.add("active");

});
});

// Toast

const toast=document.getElementById("toast");

document
.getElementById("showToast")
.addEventListener("click",()=>{

toast.style.display="block";

setTimeout(()=>{
toast.style.display="none";
},3000);

const themeBtn=document.getElementById("themeToggle");

themeBtn.addEventListener("click",()=>{
document.body.classList.toggle("light");
});


});