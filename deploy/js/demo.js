import {gsap} from "gsap";


const moveBallTL = gsap.timeline();
moveBallTL.from("#svg-image", {duration:1, y: -400, ease:"none"})
            .to ("svg-image",{duration:1, y:-400, ease:"none"})

export function moveBallAnimation(){
   // return hourGlassTL; 
}
