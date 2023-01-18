import type { NextPage } from "next";
import English from '../../public/tamyouz.jpg';
import TED from '../../public/ted.jpg';
import { style } from "./style";

const Volunteering = () => {
  
  return (
    <section style={style.root}>
      <section className="headingWrapper">
        <span style={style.myNameIs}>
          <span className="headingNumber">01.</span> Volunteering{" "}
        </span>{" "}
        <hr className={"headingDivider"}></hr>
      </section>
      <section style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* <div style={{ width: '48%', height: '400px', position: 'relative' }}>
          <img style={{ width: '100%', height: '350px' }} src={TED.src} />

          <div style={{ background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) 100%, rgba(0, 0, 0, 0.9) 154%, rgb(0, 0, 0) 126%)', position: 'absolute', bottom: '50px', height: '130px', width: '100%' }}>

          </div>
        </div> */}
   
        <div className="card__collection clear-fix">
          <div className="cards cards--two">
            <img src={English.src} className="img-responsive" alt="Cards Image" />
            <span className="cards--two__rect"></span>
            <span className="cards--two__tri"></span>
            <p>English Tutor</p>
            <p style={{ marginTop: '30px' }}>Altamayouz Charity</p>
          </div>
          <div className="cards cards--two">
            <img src={TED.src} className="img-responsive" alt="Cards Image" />
            <span className="cards--two__rect"></span>
            <span className="cards--two__tri"></span>
            <p>English Tutor</p>
            <p style={{ marginTop: '30px' }}>Altamayouz Charity</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Volunteering;
