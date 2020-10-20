import {gsap} from "gsap";

gsap.set("#SUBMIT", {transformOrigin:"center"});

var RAD  = Math.PI / 180;
var PI_2 = Math.PI / 2;

var arc = {  
  start: 360,
  end: 0,
  cx: 205,
  cy: 205,
  r: 80 
};

const starTL = gsap.timeline();

starTL.from("#SUBMIT", {duration:0.5, alpha:0, ease:"none", scale:0},"-=0.25")
   .to(arc, 3, { end: 360, ease: "none"});


export function starAnimation(){
   return starTL;
}


function buttonHoverAnimation() {

   const buttonSelector = document.querySelectorAll(".button");
 
   
   for (let i = 0; i < buttonSelector.length; i++) {
     
     const buttonTextSelector = buttonSelector[i].querySelector("span");
 
     function mousemoveFn(event) {
       
       const buttonPos = event.currentTarget.getBoundingClientRect().left;
 
       
       const xPosOfMouse = event.clientX - buttonPos;

       const xPosOfMouseInsideButton =
         xPosOfMouse - buttonSelector[i].offsetWidth / 2;
 
       const animationDivider = 3;
 
       console.log(xPosOfMouseInsideButton);
 
       gsap.to(buttonTextSelector, 2, {
         x: xPosOfMouseInsideButton / animationDivider,
         ease: Power3.easeOut
       });
     }
 
     function mouseleaveFn() {
       gsap.to(buttonTextSelector, 1, {x: 0, ease: Power3.easeOut});
     }
 
     buttonSelector[i].addEventListener("mousemove", mousemoveFn);
 
     buttonSelector[i].addEventListener("mouseleave", mouseleaveFn);
   }
 }
 
 buttonHoverAnimation();
 


