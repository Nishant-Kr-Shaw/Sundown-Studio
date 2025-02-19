const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
})

function page4Anim(){
    var elemC = document.querySelector("#elem-container");
var fimg = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function () {
    fimg.style.display = "block";
})
elemC.addEventListener("mouseleave", function () {
    fimg.style.display = "none";
})

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var img = e.getAttribute("data-image")
        fimg.style.backgroundImage = `url(${img})`
    })
})

var descImg = document.querySelector("#imgl")
var head1 = document.querySelector("#head1");
var head2 = document.querySelector("#head2");
var head3 = document.querySelector("#head3");
var para1 = document.querySelector("#para1");
var para2 = document.querySelector("#para2");
var para3 = document.querySelector("#para3");

var heads = document.querySelectorAll(".heading");
heads.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var imge = e.getAttribute("data-img")
        descImg.style.backgroundImage = `url(${imge})`
    })
})

head1.addEventListener("mouseenter", function(){
    para1.style.display = "block";
      head1.style.color = "#fff"
    head1.style.borderColor = "#ff5c0b"
})

head2.addEventListener("mouseenter", function(){
    para2.style.display = "block";
      head1.style.color = "#77624a7b"
    head1.style.borderColor = "#77624a7b"
})


head3.addEventListener("mouseenter", function(){
    para3.style.display = "block";
      head1.style.color = "#77624a7b"
    head1.style.borderColor = "#77624a7b"
})

head1.addEventListener("mouseleave", function(){
    para1.style.display = "none";
})


head2.addEventListener("mouseleave", function(){
    para2.style.display = "none";
})


head3.addEventListener("mouseleave", function(){
    para3.style.display = "none";
})

document.querySelector("#category").addEventListener("mouseleave",function(){
    descImg.style.backgroundImage = "url('assets/page4-1.webp')";
    head1.style.color = "#fff";
    head1.style.borderColor = "#ff5c0b";
    para1.style.display = "block";
})

}
page4Anim();

function swiperAnim() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}
swiperAnim();

function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-150%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

menuAnimation();