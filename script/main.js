var navBtn = document.getElementById("navigation-button");
var navIcon = document.querySelector("#navigation-icon");
var navFlag = false;

var activeColor = "pink";

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
            portBtns[j].className = portBtns[j].className.replace("pink-text", "transparent-text" );
            portBtns[j].className = portBtns[j].className.replace("blue-text", "transparent-text");
            portBtns[j].className = portBtns[j].className.replace("red-text","transparent-text");
            portBtns[j].className = portBtns[j].className.replace("yellow-text", "transparent-text");
            portBtns[j].className = portBtns[j].className.replace("green-text","transparent-text");
            portBtns[j].className = portBtns[j].className.replace("cyan-text","transparent-text");

        }
        this.className += " btn-tab--active";
        this.className = this.className.replace("pink-text", activeColor + "-text");
        this.className = this.className.replace("transparent", activeColor);
        this.className = this.className.replace("blue-text", activeColor + "-text");
        this.className = this.className.replace("red-text", activeColor + "-text");
        this.className = this.className.replace("yellow-text", activeColor + "-text");
        this.className = this.className.replace("green-text", activeColor + "-text");
        this.className = this.className.replace("cyan-text", activeColor + "-text");
    })
}

function showProjectType(type) {
 
    if (type == " all-project")
        type = "";
    var cells = $(".port-fillter__cell");
    for (var i = 0; i < cells.length; i++) {
        if ($(cells[i]).attr("class").indexOf(type) <= -1) {
            $(cells[i]).addClass("hide-ele");
            $(cells[i]).removeClass("ani")
           
        }
    }
    for (var i = 0; i < cells.length; i++) {
        if ($(cells[i]).attr("class").indexOf(type) > -1) {
            $(cells[i]).removeClass("hide-ele");
            if(type !== ""){
                $(cells[i]).addClass("ani");
            }
           
        }
    }
}

document.getElementById("all-btn").click();
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
    
})

prevSlideBtn.addEventListener("click",function(){
    plusSlide(-1);
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
    showSlide(slideIndex);
}

function closeSlideShow () {
    $("#project-details-section").fadeOut(0);

}

function replaceDefaultStyle(curr, next){
    var elements = document.querySelectorAll("[class*=" +curr + "]");
    for(var i = 0; i < elements.length; i++){
        elements[i].className = elements[i].className.replaceAll(curr, next);
    }

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

validateForm =()=>{
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["mail"].value;
    let sub = document.forms["myForm"]["subject"].value;
    let mess = document.forms["myForm"]["message"].value;
    let flag = true;
    if(name === ""){
        flag = false;
        document.getElementById("invalid-name").style.display="block";
    }
    else{
        document.getElementById("invalid-name").style.display="none";
    }

    if(!validateEmail(email)){
        flag = false;
        document.getElementById("invalid-mail").style.display="block";
    }
    else{
        document.getElementById("invalid-mail").style.display="none";
    }

    if(sub === ""){
        flag = false;
        document.getElementById("invalid-subject").style.display="block";
    }
    else{
        document.getElementById("invalid-subject").style.display="none";
    }

    if(mess === ""){
        flag = false;
        document.getElementById("invalid-message").style.display="block";
    }
    else{
        document.getElementById("invalid-message").style.display="none";
    }
    
    if(flag){
        document.getElementById("invalid-mail").style.display="none";
        document.getElementById("invalid-subject").style.display="none";
        document.getElementById("invalid-message").style.display="none";
        document.getElementById("invalid-name").style.display="none";
    }
    return flag;
}

function setActiveStyle(colorName){
    replaceDefaultStyle("pink", colorName);
    replaceDefaultStyle("blue", colorName);
    replaceDefaultStyle("green", colorName);
    replaceDefaultStyle("red", colorName);
    replaceDefaultStyle("yellow", colorName);
    replaceDefaultStyle("cyan", colorName);
    activeColor = colorName;
}

$(document).ready(function () {

    $(".toggle-style").click(function(){
        $(".style-switcher").toggleClass("open")
    })


    $("#loader").animate({
        height: '0'
    }, 2000);

    $(".navigation__link").click(function () {
        navBtn.click();
    })

   scrollToTop=()=>{
    window.scrollTo(0, 0);
   }
   $(".scrolltop").fadeOut(00);
   $(window).scroll(()=>{
      
       if($(window).scrollTop() > 20){
          
           $(".scrolltop").fadeIn(200);
       }
       else{
           
            $(".scrolltop").fadeOut(200);
       }
   })
})

