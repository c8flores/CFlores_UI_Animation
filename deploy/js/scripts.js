import {gsap} from "gsap";
import {submitAnimation} from "./demo.js"

const submitTL = gsap.timeline();
submitTL.add(submitAnimation());

