
const navList = document.querySelector(".navlist");
const hamburger = document.querySelector(".fa-bars");


hamburger.addEventListener("click", () => {
   
    hamburger.classList.toggle("fa-x");

   
    navList.classList.toggle("navlist-active");
});
