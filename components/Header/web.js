import { useEffect } from "react";
import { style } from "./styles";
import { webData } from './webData';

import dynamic from "next/dynamic";
const MobileHeader = dynamic(() => import("./mobile"), {
    ssr: false,
});


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
            <a rel="noreferrer" target={'_blank'} href={'https://drive.google.com/file/d/1pxUDPTJREiZuMXBzX44PbknRk9caDa70/view?usp=share_link'} id="resume" style={style.resumeWeb}>
                Resume
            </a>
            {webData.map((item, index) => <a rel="noreferrer" key={item.id} className="bold" href={`#${item.id}`}><span style={style.webItem}>0{index + 1}.</span> {item.name}</a>)}
        </div>
    </div>
}

export default WebHeader;