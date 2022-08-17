import iframe0 from "./iframe0.js";
import iframe1 from "./iframe1.js";
import iframe2 from "./iframe2.js";

const allFrames =()=>{
 document.querySelector(".myIframe").innerHTML
 = ( iframe0 () + iframe1 () + iframe2() );
            }
            export default allFrames;
