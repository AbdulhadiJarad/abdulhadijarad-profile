import Facebook from '../Icons/facebook';
import Gitlab from '../Icons/Gitlab';
import InstagramIcon from '../Icons';
import Linkedin from '../Icons/Linkedin';
import Email from '../Icons/Email';
import { useState } from 'react';

const Footer = () => {

    const [activeIcons, setActiveIcons] = useState({});

    const onMouseEnter = (name) => {
        const object = { ...activeIcons };
        object[name] = true;
        console.log(object, "object");
        setActiveIcons({ ...object });
    };

    const onMouseOut = (name) => {
        const object = { ...activeIcons };
        object[name] = false;
        console.log(object, "object");
        setActiveIcons({ ...object });
    };

    return <>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 50 }}>
            <div
                onMouseLeave={() => onMouseOut("face")}
                onMouseEnter={() => onMouseEnter("face")}
                style={{ height: "20px", marginTop: '20px' }}
            >
                <a target="_blank"
                    href="https://www.linkedin.com/in/abdulhadi-jarad-a1871a6a/">
                    <Facebook isActive={activeIcons["face"]} />

                </a>
            </div>
            <div
                onMouseLeave={() => onMouseOut("gitlab")}
                onMouseEnter={() => onMouseEnter("gitlab")}
                style={{ marginTop: "20px", height: '20px' }}
            >
                <a target="_blank" href="https://gitlab.com/AbdulhadiJarad">
                    <Gitlab isActive={activeIcons["gitlab"]} />

                </a>
            </div>
            <div
                onMouseLeave={() => onMouseOut("insta")}
                onMouseEnter={() => onMouseEnter("insta")}
                style={{ marginTop: "20px", height: '20px' }}
            >
                <a target="_blank"
                    href="https://www.linkedin.com/in/abdulhadi-jarad-a1871a6a/">
                    <InstagramIcon isActive={activeIcons["insta"]} />

                </a>
            </div>
            <div
                onMouseLeave={() => onMouseOut("linkedin")}
                onMouseEnter={() => onMouseEnter("linkedin")}
                style={{ height: '20px', marginTop: "20px" }}
            >
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/abdulhadi-jarad-a1871a6a/"
                >
                    <Linkedin isActive={activeIcons["linkedin"]} />

                </a>
            </div>
            <div
                onMouseLeave={() => onMouseOut("email")}
                onMouseEnter={() => onMouseEnter("email")}
                style={{ height: '20px', marginTop: "20px", }}
            >
                <a href="mailto:abdulhadi.jarad@gmail.com" target="_blank">
                    <Email isActive={activeIcons["email"]} />

                </a>
            </div>
        </div>
        <hr style={{ margin: '0px auto', marginTop: '25px', position: 'relative', width: '20%' }} className={"headingDivider"}></hr>
        <p style={{ textAlign: 'center', fontSize: '15px', marginBottom: '50px', marginTop: '15px' }}>Designed & Coded by Abdulhadi Jarad</p>
    </>
}

export default Footer;