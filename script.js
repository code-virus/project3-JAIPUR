var fixed= document.querySelector(".box-flow")
var buttom =document.querySelector(".bottum-1")
buttom.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})
buttom.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(i){
    i.addEventListener("mouseenter", function(){
       var image= i.getAttribute("data-image")
       fixed.style.backgroundImage=`url(${image})`
    })
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});