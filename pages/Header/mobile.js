import { webData } from "./webData";
import Menu from '../../public/menu.svg'
import Close from '../../public/close.svg'
import { useState } from "react";


const MobileHeader = () => {

    const [clicked, setClicked] = useState(false);

    const onClick = () => {
        setClicked(true);
        document.body.style.overflow = 'hidden';
    }

    const closeMenu = () => {
        setClicked(false);
        document.body.style.overflow = 'scroll';
    }

    return <>
       <div className="mobileHeader">
            <input type="checkbox" checked={clicked} id="active" />
            <img onClick={onClick} style={{ width: '40px', position: 'relative', right: '20px', height: '40px', float: 'right', }} src={Menu.src} />
            <div className="wrapper">
                <img onClick={closeMenu} style={{ width: '40px', height: '40px', float: 'right', marginRight: '20px', marginTop: '100px' }} src={Close.src} />
                <ul style={{ listStyle: 'none !important' }}>
                    {/* {webData.map((item, index) => <li><a href="#home" style={{ fontSize: '4vmin' }}><span style={{ color: '#64ffda', marginRight: '5px' }}>0{index + 1}.</span> {item}</a></li>)} */}
                </ul>
            </div>
       </div>
    </>
}

export default MobileHeader;