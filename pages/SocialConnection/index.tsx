import type { NextPage } from "next";
import { useState } from "react";
import InstagramIcon from "../Icons";
import Email from "../Icons/Email";
import Gitlab from "../Icons/Gitlab";
import Linkedin from "../Icons/Linkedin";

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
          style={{ marginTop: "20px" }}
        >
          <InstagramIcon isActive={activeIcons["insta"]} />
        </div>
        <div
          onMouseLeave={() => onMouseOut("gitlab")}
          onMouseEnter={() => onMouseEnter("gitlab")}
          style={{ marginTop: "20px" }}
        >
          <a target="_blank" href="https://gitlab.com/AbdulhadiJarad">
            <Gitlab isActive={activeIcons["gitlab"]} />
          </a>
        </div>
        <div
          onMouseLeave={() => onMouseOut("linkedin")}
          onMouseEnter={() => onMouseEnter("linkedin")}
          style={{ marginLeft: "-10px", marginTop: "20px" }}
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
          style={{ marginLeft: "-10px", marginTop: "20px" }}
        >
          <a href="mailto:abdulhadi.jarad@gmail.com" target="_blank">
            <Email isActive={activeIcons["email"]} />
          </a>
        </div>
        <div className="vl"></div>
      </div>
    </>
  );
};

export default SocialConnection;
