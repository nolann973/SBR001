
// MENU MOBILE

function toggleMenu(){

    const menu = document.getElementById("menu");

    menu.classList.toggle("active");

}



// Fermer le menu après avoir cliqué sur un lien

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click",()=>{

        document
        .getElementById("menu")
        .classList.remove("active");

    });

});





// ANIMATION AU SCROLL


const elements = document.querySelectorAll(

".profile-card, .section, .card, .review"

);



const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";


        }


    });



},{

    threshold:0.15

});





elements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform="translateY(40px)";

    element.style.transition="0.8s ease";


    observer.observe(element);


});







// FORMULAIRE


const form = document.querySelector("form");



form.addEventListener("submit",(event)=>{


    event.preventDefault();



    alert(
        "Merci pour votre message. Le cabinet vous répondra rapidement."
    );


    form.reset();


});
