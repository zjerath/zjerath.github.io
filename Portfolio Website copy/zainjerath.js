const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["software developer", "data scientist", "techno optimist"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    var elements1 = document.getElementsByClassName("top-nav");
    for(var i = 0; i < 1; i++){
      elements1[i].style.backgroundColor = "#262626";
      elements1[i].style.height = "3rem";
    }
    var menuitems = document.getElementsByClassName("menu-items");
    for(var i = 0; i < menuitems.length; i++){
      menuitems[i].style.color = "white";
    }
  }
  else {
    var elements2 = document.getElementsByClassName("top-nav");
    for(var i = 0; i < 1; i++){
      elements2[i].style.backgroundColor = "white";
      elements2[i].style.height = "8rem";
    }
    var menuitems = document.getElementsByClassName("menu-items");
    for(var i = 0; i < menuitems.length; i++){
      menuitems[i].style.color = "black";
    }
  }
}

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;
  sections.forEach(current => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 130;
    let id = current.getAttribute("id");
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector(".menu a[href*=" + id + "]").classList.add("active");
    }
    else{
      document.querySelector(".menu a[href*=" + id + "]").classList.remove("active");
    }
  })
})

function type(){
  if(charIndex < textArray[textArrayIndex].length){
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else{
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase(){
  if(charIndex > 0){
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex --;
    setTimeout(erase, erasingDelay);
  }
  else{
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex >= textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function(){
  setTimeout(type, newTextDelay + 250);
})

var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");
function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
