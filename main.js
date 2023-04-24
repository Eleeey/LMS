var toggleBtn = document.querySelector(".toggle")
var drpMenu = document.querySelector(".links")
console.log(drpMenu)
toggleBtn.addEventListener('click',()=>{
  drpMenu.classList.toggle("drop");
})