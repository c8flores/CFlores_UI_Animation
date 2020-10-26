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

const submitTL = gsap.timeline();

submitTL.from("#SUBMIT", {duration:0.5, alpha:0, ease:"none", scale:0},"-=0.25")
   .to(arc, 3, { end: 360, ease: "none"});


export function submitAnimation(){
   return submitTL;
}
 


