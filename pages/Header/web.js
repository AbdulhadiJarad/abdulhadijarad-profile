import { useEffect } from "react";
import MobileHeader from "./mobile";
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
        <div className="webHeader" style={{ textAlign: 'center', margin: '0px auto' }}>
            <a id="resume" style={{ border: 'solid 1px #64ffda', width: '100px', borderRadius: '5px' }}>
                Resume
            </a>
            {webData.map((item, index) => <a href={`#${item.id}`}><span style={{ color: '#64ffda', marginRight: '5px' }}>0{index + 1}.</span> {item.name}</a>)}
        </div>
    </div>
}

export default WebHeader;