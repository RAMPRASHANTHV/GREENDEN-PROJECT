// selecting side navbar , menuicon , sidenav (button X)

var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");
menuicon.addEventListener("click", function () {
    sidenav.style.right = 0;
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})


// search functionality for products

// selecting element
var search = document.getElementById("search");
var productcontainer = document.getElementById("product-container");
var productList = productcontainer.querySelectorAll("div");
// console.log(productList);

search.addEventListener("keyup", function () {

    var EnteredValue = event.target.value.toUpperCase();
    // console.log(EnteredValue);

    for (count = 0; count < productList.length; count++) {
        var productItem = productList[count].querySelector("h1").textContent;

        if (productItem.toUpperCase().indexOf(EnteredValue) < 0) 
        {
            productList[count].style.display = "none";
        }

        else 
        {
            productList[count].style.display = "block";

        }
    }
})