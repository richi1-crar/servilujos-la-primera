document.getElementById("year").textContent=new Date().getFullYear();
const nav=document.getElementById("mainNav"),toggle=document.getElementById("menuToggle");
if(toggle)toggle.addEventListener("click",()=>nav.classList.toggle("open"));
const current=location.pathname.split("/").pop().replace(".html","")||"index";
document.querySelectorAll(".nav a").forEach(a=>{if(a.dataset.page===current)a.classList.add("active")});