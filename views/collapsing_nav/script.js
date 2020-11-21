var btn = document.querySelector(".burger");

btn.addEventListener("click", function(){
    var side = document.querySelector(".side");
    side.classList.toggle("slide");
})