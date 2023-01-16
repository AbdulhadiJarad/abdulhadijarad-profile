import { useEffect } from "react";
import MobileHeader from "./mobile";
import { style } from "./styles";
import { webData } from './webData'

const WebHeader = () => {
    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-50px";
            }
            prevScrollpos = currentScrollPos;
        }
    });
    
    return <div id="navbar">
        <MobileHeader />
        <div className="webHeader" style={style.webWrapper}>
            <a id="resume" style={style.resumeWeb}>
                Resume
            </a>
            {webData.map((item, index) => <a className="bold" href={`#${item.id}`}><span style={style.webItem}>0{index + 1}.</span> {item.name}</a>)}
        </div>
    </div>
}

export default WebHeader;