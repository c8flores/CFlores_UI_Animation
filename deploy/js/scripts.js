import {gsap} from "gsap";
import {starAnimation} from "./demo.js"

const starTL = gsap.timeline();
starTL.add(starAnimation());

