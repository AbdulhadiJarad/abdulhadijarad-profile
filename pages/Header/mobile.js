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

    const onClickRoute = id => {
        setClicked(false);
        document.body.style.overflow = 'scroll';
        document.location.href = `#${id}`;
    }

    return <>
       <div className="mobileHeader">
            <input type="checkbox" checked={clicked} id="active" />
            <img onClick={onClick} style={{ width: '30px',  position: 'relative', right: '20px', height: '40px', float: 'right', }} src={Menu.src} />
            <div className="wrapper">
            
                <img onClick={closeMenu} style={{ width: '30px', height: '40px', float: 'right', marginRight: '20px', marginTop: '120px' }} src={Close.src} />
                <ul style={{ listStyle: 'none !important' }}>
                
                    {webData.map((item, index) => <li ><a onClick={() => onClickRoute(item.id)} href="#home" style={{ fontSize: '4vmin' }}><span style={{ color: '#64ffda', marginRight: '5px' }}>0{index + 1}.</span> {item.name}</a></li>)}
                    <a id="resume" style={{ border: 'solid 1px #64ffda', height: '80px', width: '150px', borderRadius: '5px', fontSize: '18px' }}>
                        Resume
                    </a>
                </ul>
              
            </div>
       </div>
    </>
}

export default MobileHeader;