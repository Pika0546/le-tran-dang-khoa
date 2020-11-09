var navBtn = document.getElementById("navigation-button");
var navIcon = document.querySelector("#navigation-icon");
var navFlag = false;

navBtn.addEventListener("click", function (e) {
    navFlag = !navFlag;
    if (navFlag) {
        document.getElementById("nav").style.width = "100%";
        navIcon.className += " navigation__close-btn";
    }
    else {
        document.getElementById("nav").style.width = "0%";
        navIcon.className = navIcon.className.replace(" navigation__close-btn", "");

    }
})

var portBtns = document.getElementsByClassName("port-btn");
for (var i = 0; i < portBtns.length; i++) {
    portBtns[i].addEventListener("click", function () {
        for (var j = 0; j < portBtns.length; j++) {
            portBtns[j].className = portBtns[j].className.replace(" btn-tab--active", "");
        }
        this.className += " btn-tab--active";
    })
}
function showProjectType(type) {
    if (type == " all-project")
        type = "";
    var cells = $(".port-fillter__cell");
    for (var i = 0; i < cells.length; i++) {
        if ($(cells[i]).attr("class").indexOf(type) <= -1) {
            // $(cells[i]).addClass("cell-show");
            $(cells[i]).fadeOut(0);
        }
    }
    for (var i = 0; i < cells.length; i++) {
        if ($(cells[i]).attr("class").indexOf(type) > -1) {
            // $(cells[i]).addClass("cell-show");
            $(cells[i]).fadeIn(0);
        }
    }
}

var slideIndex = 0;
var slides = document.getElementsByClassName("slide__container");

function plusSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

var nextSlideBtn = document.getElementById("next-slide");
var prevSlideBtn = document.getElementById("prev-slide");

nextSlideBtn.addEventListener("click",function(){
    plusSlide(1);
    console.log(slideIndex);
})

prevSlideBtn.addEventListener("click",function(){
    plusSlide(-1);console.log(slideIndex);
})


var w = window.innerWidth;
    if (w <= 600) {
        
        nextSlideBtn.innerHTML = '<i class="fas fa-angle-down"></i>';
        prevSlideBtn.innerHTML = '<i class="fas fa-angle-up"></i>';
    } else {
       
        nextSlideBtn.innerHTML = '<i class="fas fa-angle-right">';
        prevSlideBtn.innerHTML = '<i class="fas fa-angle-left">';
    }
window.addEventListener("resize", function () {
    var w = window.innerWidth;
    if (w <= 600) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.left = 0;
        }
        nextSlideBtn.innerHTML = '<i class="fas fa-angle-down"></i>';
        prevSlideBtn.innerHTML = '<i class="fas fa-angle-up"></i>';
    } else {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.top = 0;
        }
        nextSlideBtn.innerHTML = '<i class="fas fa-angle-right">';
        prevSlideBtn.innerHTML = '<i class="fas fa-angle-left">';
    }
    showSlide(slideIndex);
})

function showSlide(n) {

    if (n >= slides.length) {
        n = slides.length - 1;
    }
    if (n < 0) {
        n = 0;
    }
    slideIndex = n;
    var w = window.innerWidth;
   
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.top = 0;
        slides[i].style.left = "75%";
        slides[i].className = slides[i].className.replace(" slide--active", "");
    }
    if (w < 600) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.left = 0;
            slides[i].style.top =  (slides.length - 1)*35 -70 * (slideIndex ) + "%";
        }
    }
    else {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.left = (slides.length - 1)*25 + -50 * (slideIndex) + "%";
        }
    }
 
    slides[slideIndex].className += " slide--active";
    if(slideIndex == 0){
        prevSlideBtn.style.display = "none";
    }else{
        prevSlideBtn.style.display = "block";
    }
    if(slideIndex == slides.length - 1){
        nextSlideBtn.style.display = "none";
    }else{
        nextSlideBtn.style.display = "block";
    }



}

function slideShow(n){
    slideIndex = n;
    $("#project-details-section").fadeIn(200);
    $(".part").fadeOut(0);
    showSlide(slideIndex);
}

function closeSlideShow () {
    $("#project-details-section").fadeOut(0);
    $("#project-section").fadeIn(0);

}

$(document).ready(function () {
    showProjectType(" all-project");


    function moveToSection(des) {
        $(".part").fadeOut(0);
        $(des).fadeIn(300);
    }
    $(".part").hide();

    $("#loader").animate({
        height: '0'
    }, 5000);
    $(".navigation__link").click(function () {
        moveToSection("#" + $(this).attr("id") + "-section");
        navBtn.click();
    })

    $("#header-section").fadeIn(1000);
    // $("#project-details-section").fadeIn(600);
    $("#talk-to-me-btn").click(function () {
        $("#about-section").fadeOut(300);
        $("#contact-section").fadeIn(300);
    })
    $("#more-about-me").click(function () {
        $("#header-section").fadeOut(300);
        $("#about-section").fadeIn(300);
    })
    $("#back-home").click(function () {
        $("#about-section").fadeOut(300);
        $("#header-section").fadeIn(300);
    })
    $("#home-icon").click(function () {
        $(".part").fadeOut(300);
        $("#header-section").fadeIn(300);
    })

    $(".more-info-container").fadeOut();
    $("#skill").fadeIn();
    $("#skill-btn").addClass("btn-tab--active");
    $("#skill-btn").click(function () {
        $(".info-btn").removeClass("btn-tab--active");
        $("#skill-btn").addClass("btn-tab--active");
        $(".more-info-container").fadeOut(0);
        $("#skill").fadeIn(200);
    })
    $("#experience-btn").click(function () {
        $(".info-btn").removeClass("btn-tab--active");
        $("#experience-btn").addClass("btn-tab--active");
        $(".more-info-container").fadeOut(0);
        $("#experience").fadeIn(200);
    })
    $("#education-btn").click(function () {
        $(".info-btn").removeClass("btn-tab--active");
        $("#education-btn").addClass("btn-tab--active");
        $(".more-info-container").fadeOut(0);
        $("#education").fadeIn(200);
    })


})

