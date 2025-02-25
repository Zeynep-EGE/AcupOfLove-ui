const btnActive = document.getElementsByClassName('btn');

btnActive.addEventListener('click', function(){
    if(btnActive.style.backgroundColor === '#be9c79'){
        btnActive.style.backgroundColor = '#333'
    }else{
        btnActive.style.backgroundColor === '#be9c79'
    }
});

const menuBtn = document.getElementById('#menu-btn');
const btn = document.querySelector(".navbar div");

// Hamburger menüsüne tıklandığında aktif sınıfını ekliyoruz
    menuBtn.addEventListener("click", () => {
    btn.classList.toggle("active"); // "active" sınıfını toggle yap
});