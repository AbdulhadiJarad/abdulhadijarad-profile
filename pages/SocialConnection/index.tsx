import type { NextPage } from "next";
import { useState } from "react";
import InstagramIcon from "../Icons";
import Email from "../Icons/Email";
import Gitlab from "../Icons/Gitlab";
import Linkedin from "../Icons/Linkedin";
import Facebook from "../Icons/facebook";

const SocialConnection: NextPage = () => {

  const [activeIcons, setActiveIcons] = useState({});

  const onMouseEnter = (name) => {
    const object = { ...activeIcons };
    console.log("hey");
    object[name] = true;
    console.log(object, "object");
    setActiveIcons({ ...object });
  };

  const onMouseOut = (name) => {
    const object = { ...activeIcons };
    console.log("hey");
    object[name] = false;
    console.log(object, "object");
    setActiveIcons({ ...object });
  };

  console.log(activeIcons)

  return (
    <>
      <div style={{ position: "fixed", bottom: 0, marginLeft: 50 }}>

        <div
          onMouseLeave={() => onMouseOut("insta")}
          onMouseEnter={() => onMouseEnter("insta")}
          style={{ marginTop: "20px", marginLeft: '-25px' }}
        >
          <a target="_blank"
            href="https://www.linkedin.com/in/abdulhadi-jarad-a1871a6a/">
            <Facebook isActive={activeIcons["face"]} />
          </a>
        </div>
        <div
          onMouseLeave={() => onMouseOut("gitlab")}
          onMouseEnter={() => onMouseEnter("gitlab")}
          style={{ marginTop: "20px", marginLeft: '-16px' }}
        >
          <a target="_blank" href="https://gitlab.com/AbdulhadiJarad">
            <Gitlab isActive={activeIcons["gitlab"]} />
          </a>
        </div>
        <div
          onMouseLeave={() => onMouseOut("insta")}
          onMouseEnter={() => onMouseEnter("insta")}
          style={{ marginTop: "20px", marginLeft: '-15px' }}
        >
          <a target="_blank"
            href="https://www.linkedin.com/in/abdulhadi-jarad-a1871a6a/">
            <InstagramIcon isActive={activeIcons["insta"]} />
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
            <Linkedin isActive={activeIcons["linkedin"]} />
          </a>
        </div>
        <div
          onMouseLeave={() => onMouseOut("email")}
          onMouseEnter={() => onMouseEnter("email")}
          style={{ marginLeft: "-15px", marginTop: "20px", }}
        >
          <a href="mailto:abdulhadi.jarad@gmail.com" target="_blank">
            <Email isActive={activeIcons["email"]} />
          </a>
        </div>
        <div className="vl"></div>
      </div>
      <div style={{ position: "fixed", bottom: 0, marginRight: 50, right: 0, height: '460px' }}>
        <span style={{ color: '#ccd6f6', position: 'absolute', top: 0, right: '-20px', transform: 'rotate(90deg)', width: '40px', }}>
          Abdulhadi.Jarad@gmail.com
        </span>
        <div style={{ position: 'absolute', bottom: 0 }} className="vl"></div>
      </div>
    </>
  );
};

export default SocialConnection;
