var navBtn = document.getElementById("navigation-button");
var navIcon = document.querySelector("#navigation-icon");
var navFlag = false;
navBtn.addEventListener("click",function(e){
    navFlag = !navFlag;
    if(navFlag){
        document.getElementById("nav").style.width = "100%";
        navIcon.className += " navigation__close-btn";
    }
    else{
        document.getElementById("nav").style.width = "0%";
        navIcon.className = navIcon.className.replace(" navigation__close-btn", "");
        
    }   
})

showProject(" all-project");
function showProject(type){
    console.log(type);
    var cells = document.getElementsByClassName("port-fillter__cell");
    if(type == " all-project"){
        type = "";
    
    }
    for(var i=0; i<cells.length; i++){
        cells[i].className = cells[i].className.replace(" cell-show", "");
    }
    for(var i=0; i<cells.length; i++){
        if(cells[i].className.indexOf(type) > -1){
            cells[i].className += " cell-show";
        }
    }
}
var portBtns = document.getElementsByClassName("port-btn");
for(var i=0; i<portBtns.length; i++){
    portBtns[i].addEventListener("click", function(){
        for(var j=0; j<portBtns.length; j++){
            portBtns[j].className = portBtns[j].className.replace(" btn-tab--active", "");
        }
        this.className += " btn-tab--active";
    })
}
$(document).ready(function(){
    function moveToSection(des){
        $(".part").fadeOut(0);
        $(des).fadeIn(300);
    }

    $(".navigation__link").click(function(){
        moveToSection("#" + $(this).attr("id") + "-section");
        navBtn.click();
    })
    $(".part").fadeOut();
    $("#header-section").fadeIn();
    $("#talk-to-me-btn").click(function(){
        $("#about-section").fadeOut(300);
        $("#contact-section").fadeIn(300);
    })
    $("#more-about-me").click(function(){
        $("#header-section").fadeOut(300);
        $("#about-section").fadeIn(300);
    })
    $("#back-home").click(function(){
        $("#about-section").fadeOut(300);
        $("#header-section").fadeIn(300);
    })
    $("#home-icon").click(function(){
        $(".part").fadeOut(300);
        $("#header-section").fadeIn(300);
    })
    
    $(".more-info-container").fadeOut();
    $("#skill").fadeIn();
    $("#skill-btn").addClass("btn-tab--active");
    $("#skill-btn").click(function(){
        $(".info-btn").removeClass("btn-tab--active");
        $("#skill-btn").addClass("btn-tab--active");
        $(".more-info-container").fadeOut(0);
        $("#skill").fadeIn(200);
    })
    $("#experience-btn").click(function(){
        $(".info-btn").removeClass("btn-tab--active");
        $("#experience-btn").addClass("btn-tab--active");
        $(".more-info-container").fadeOut(0);
        $("#experience").fadeIn(200);
    })
    $("#education-btn").click(function(){
        $(".info-btn").removeClass("btn-tab--active");
        $("#education-btn").addClass("btn-tab--active");
        $(".more-info-container").fadeOut(0);
        $("#education").fadeIn(200);
    })

    
})