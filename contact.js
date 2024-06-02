// selecting side navbar , menuicon , sidenav (button X)

var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");
menuicon.addEventListener("click",function(){
    sidenav.style.right=0;
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
