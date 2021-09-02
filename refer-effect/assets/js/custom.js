//Code view
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
});

//Code Tab Menu
const contBtn = document.querySelectorAll(".view-title li");
const contDiv = document.querySelectorAll(".view-cont > div");

contBtn.forEach((element, index)=> {
    element.addEventListener("click", function(){

        contBtn.forEach((el) => {
            el.classList.remove("active");
        });
        element.classList.add("active");

        contDiv.forEach(el => {
            el.style.display = "none";
        });
        contDiv[index].style.display = "block";
    });
});


//Modal
document.querySelector(".info button").addEventListener("click",()=>{ 
    document.querySelector("#modal").classList.add("show");
    document.querySelector("#modal").classList.remove("hide");
});

document.querySelector(".modal-cont button").addEventListener("click",()=>{
    document.querySelector("#modal").classList.add("hide");
});

// $(".info button").click(function () {
//     $("#modal").removeClass().addClass("show");
// });

// $(".modal-cont button").click(function () {
//     $("#modal").addClass("hide");
// });
