import type { NextPage } from "next";
import InstagramIcon from "../Icons";
import Email from "../Icons/Email";
import Gitlab from "../Icons/Gitlab";
import Linkedin from "../Icons/Linkedin";

const SocialConnection: NextPage = () => {
  return (
    <>
      <div style={{ position: "fixed", bottom: 0, marginLeft: 50 }}>
        <div style={{ marginTop: "20px" }}>
          <InstagramIcon />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Gitlab />
        </div>
        <div style={{ marginLeft: "-10px", marginTop: "20px" }}>
          <Linkedin />
        </div>
        <div style={{ marginLeft: "-10px", marginTop: "20px" }}>
          <Email />
        </div>
        <div className="vl"></div>
      </div>
      <div style={{ position: "fixed", bottom: 0, marginRight: 50, right: 0 }}>
        <div style={{ marginTop: "20px" }}>
          <InstagramIcon />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Gitlab />
        </div>
        <div style={{ marginLeft: "-10px", marginTop: "20px" }}>
          <Linkedin />
        </div>
        <div style={{ marginLeft: "-10px", marginTop: "20px" }}>
          <Email />
        </div>
        <div className="vl"></div>
      </div>
    </>
  );
};

export default SocialConnection;
