import type { NextPage } from "next";
import { useState } from "react";
import InstagramIcon from "../Icons";
import Email from "../Icons/Email";
import Gitlab from "../Icons/Gitlab";
import Linkedin from "../Icons/Linkedin";
import Facebook from "../Icons/facebook";

const SocialConnection: NextPage = () => {

  const [activeIcons, setActiveIcons] = useState<{ [key: string]: boolean }>();

  const onMouseEnter = (name: string) => {
    const object: { [key: string]: boolean } = { ...activeIcons };
    object[name] = true;
    console.log(object, "object");
    setActiveIcons({ ...object });
  };

  const onMouseOut = (name: string) => {
    const object: { [key: string]: boolean } = { ...activeIcons };
    object[name] = false;
    console.log(object, "object");
    setActiveIcons({ ...object });
  };


  return (
    <>
      <div className="socialMediaAlign" style={{ position: "fixed", zIndex: 9999, bottom: 0, marginLeft: 50 }}>

        <div
          onMouseLeave={() => onMouseOut("face")}
          onMouseEnter={() => onMouseEnter("face")}
          style={{ marginTop: "20px", marginLeft: '-25px' }}
        >
          <a target="_blank"
            href="https://www.facebook.com/abdalhady.jarad">
            <Facebook isActive={activeIcons?.face} />
          </a>
        </div>
        <div
          onMouseLeave={() => onMouseOut("gitlab")}
          onMouseEnter={() => onMouseEnter("gitlab")}
          style={{ marginTop: "20px", marginLeft: '-16px' }}
        >
          <a target="_blank" href="https://gitlab.com/AbdulhadiJarad">
            <Gitlab isActive={activeIcons?.gitlab} />
          </a>
        </div>
        <div
          onMouseLeave={() => onMouseOut("insta")}
          onMouseEnter={() => onMouseEnter("insta")}
          style={{ marginTop: "20px", marginLeft: '-15px' }}
        >
          <a target="_blank"
            href="https://www.instagram.com/abd_alhadi_jarad/">
            <InstagramIcon isActive={activeIcons?.insta} />
          </a>
        </div>
        <div
          onMouseLeave={() => onMouseOut("linkedin")}
          onMouseEnter={() => onMouseEnter("linkedin")}
          style={{ marginLeft: "-15px", marginTop: "20px" }}
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abdulhadi-jarad-a1871a6a/"
          >
            <Linkedin isActive={activeIcons?.linkedin} />
          </a>
        </div>
        <div
          onMouseLeave={() => onMouseOut("email")}
          onMouseEnter={() => onMouseEnter("email")}
          style={{ marginLeft: "-15px", marginTop: "20px", }}
        >
          <a href="mailto:abdulhadi.jarad@gmail.com">
            <Email isActive={activeIcons?.email} />
          </a>
        </div>
        <div className="vl"></div>
      </div>
      <div className="socialMediaAlign" style={{ position: "fixed", zIndex: 999, bottom: 0, marginRight: 50, right: 0, height: '460px' }}>
        <span style={{ color: '#ccd6f6', position: 'absolute', top: 0, right: '-20px', transform: 'rotate(90deg)', width: '40px', }}>
          <a className="emailAlign" href="mailto:abdulhadi.jarad@gmail.com">
          Abdulhadi.Jarad@gmail.com
          </a>
        </span>
        <div style={{ position: 'absolute', bottom: 0 }} className="vl"></div>
      </div>
    </>
  );
};

export default SocialConnection;
