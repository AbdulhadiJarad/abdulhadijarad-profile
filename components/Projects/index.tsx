import { motion, Variants } from "framer-motion";
import type { NextPage } from "next";
import { style } from "./styles";
import MindMover from "../../images/mindmovers.jpg";
import Overlay from "../../shared/Overlay";

interface Props {
  cardVariants: Variants;
  children: any
}

const cardVariants: Variants = {
  offscreen: {
    x: -100
  },
  onscreen: {
    x: 0,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.9
    }
  }
};

const cardVariantsSettings: Variants = {
  offscreen: {
    x: 100
  },
  onscreen: {
    x: 0,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.9
    }
  }
};

function Card({ cardVariants, children }: Props) {

  return (
    <motion.div
      // className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
}

const Projects: NextPage = () => {
  return (
    <section className="startups projects-web" style={style.root}>
      <section className="headingWrapper">
        <span className="bold" style={style.myNameIs}>
          <span className="headingNumber">03.</span> Some Things I’ve Built {" "}
        </span>{" "}
        <hr style={style.headingDivider}></hr>
      </section>
      <section style={{ display: 'flex', alignItems: 'center', marginTop: '60px', width: '100%' }}>
        <Card cardVariants={cardVariants}>
          <div style={{ flexBasis: '130%' }}>
            <a rel="noreferrer" target={'_blank'} href="mindmovers.com">
              <img src={'/mindmovers.jpg'} alt="abdulhadi mindmovers" style={{ width: '120%' }} />
              </a>
          </div>
        </Card>
        <div style={{ textAlign: 'right', height: '100%' }}>
          <section style={{ width: '500px', position: 'relative', height: 'fit-content', marginBottom: 'auto', marginTop: 'auto', }}>
            <p style={{ textAlign: 'right', color: '#64ffda', fontWeight: '400' }}>Featured Project</p>
            <p style={{ textAlign: 'right', color: '#ccd6f6', fontWeight: '600', fontSize: 'clamp(24px, 5vw, 28px)' }}>Mind Movers</p>
            <section style={{ backgroundColor: '#112240', color: 'rgb(136, 146, 176)', fontSize: '15px', padding: '20px', zIndex: 99, }}>
              <p>
                an immersive e-learning platform for the Arab world to develop personal and professional skills.
                <br/>I worked as a frontend technical leader. 
                <br/>
                <a target={'_blank'} href="mindmovers.com"><span style={{ color: 'rgb(100, 255, 218)' }}>Discover</span></a>
              </p>
            </section>
            <section style={{ display: 'flex', marginTop: '10px', flexBasis: '100%', justifyContent: 'flex-end', gap: '40px' }}>
              <p>NextJs</p>
              <p>Material UI5</p>
              <p>GraphQL</p>
              <p>Stripe</p>
            </section>
          </section>
        </div>
      </section>
      {/*  */}
      <section style={{ display: 'flex', alignItems: 'center', marginTop: '60px' }}>

        <div style={{ textAlign: 'left', flexBasis: '100%', position: 'relative', height: '100%', }}>
          <section style={{ width: '500px', zIndex: 99999, position: 'absolute', height: 'fit-content', bottom: 0, top: 0, marginBottom: 'auto', marginTop: 'auto', }}>
            <p style={{ textAlign: 'left', color: '#64ffda', fontWeight: '400' }}>Featured Project</p>
            <p style={{ textAlign: 'left', color: '#ccd6f6', fontWeight: '600', fontSize: 'clamp(21px, 5vw, 18px)' }}>Blockchain Lifelong Learning Record</p>
            <section style={{ backgroundColor: '#112240', color: '#a8b2d1m', fontSize: '15px', padding: '20px', zIndex: 99, }}>
              <p>
                The Project is a platform that enable learners to move their learning records from one institution to another in a secure and verifiable format.
                I worked as dApp Developer using React & Web3.js
                <br />
                <a rel="noreferrer" target={'_blank'} href="https://www.youtube.com/watch?v=ZBVQ-p0knCo"><span style={{ color: 'rgb(100, 255, 218)' }}>Discover</span></a>
              </p>           
               </section>
            <section style={{ display: 'flex', marginTop: '10px', justifyContent: 'flex-start', gap: '40px' }}>
              <p>ReactJS</p>
              <p>Solidaty</p>
              <p>NodeJS</p>
              <p>Web3</p>
            </section>
          </section>
        </div>
        <div style={{ flexBasis: '130%', }}>
          <Card cardVariants={cardVariantsSettings}>
            <Overlay>
              <img alt="abdulhadi jarad blockchain life long learning record" style={{ width: '100%' }} src={'/gp.jpg'} />
            </Overlay>
          </Card>
        </div>
      </section>
    </section>
  );
};

export default Projects;
