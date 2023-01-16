import type { NextPage } from "next";
import { style } from "./styles";
import { recentCompaniesData } from "./data";
import Image from "next/image";
import MindMover from "../../public/mindmovers.jpg";
import { motion, useScroll, useSpring, Variants } from "framer-motion";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
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
            <img style={{ width: '120%' }} src={MindMover.src} />
          </div>
       </Card>
        <div style={{ textAlign: 'right',  height: '100%' }}>
          <section style={{ width: '500px', position: 'relative', height: 'fit-content',marginBottom: 'auto', marginTop: 'auto', }}>
            <p style={{ textAlign: 'right', color: '#64ffda', fontWeight: '400' }}>Featured Project</p>
            <p style={{ textAlign: 'right', color: '#ccd6f6', fontWeight: '600', fontSize: 'clamp(24px, 5vw, 28px)' }}>Mind Movers</p>
            <section style={{ backgroundColor: '#112240', color: '#a8b2d1m', fontSize: '15px', padding: '20px', zIndex: 99, }}>
            <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
            </p>
            </section>
            <section style={{ display: 'flex', marginTop: '10px', flexBasis: '100%', justifyContent: 'flex-end', gap: '40px' }}>
              <p>NextJs</p>
              <p>GraphQl</p>
              <p>NextJs</p>
              <p>GraphQl</p>
            </section>
          </section>
        </div>
      </section>
      {/*  */}  
      <section style={{ display: 'flex', alignItems: 'center', marginTop: '60px' }}>
       
        <div style={{ textAlign: 'left', flexBasis: '100%', position: 'relative', height: '100%' }}>
          <section style={{ width: '500px', zIndex: 99, position: 'absolute', height: 'fit-content', bottom: 0, top: 0,  marginBottom: 'auto', marginTop: 'auto', }}>
            <p style={{ textAlign: 'left', color: '#64ffda', fontWeight: '400' }}>Featured Project</p>
            <p style={{ textAlign: 'left', color: '#ccd6f6', fontWeight: '600', fontSize: 'clamp(24px, 5vw, 28px)' }}>Mind Movers</p>
            <section style={{ backgroundColor: '#112240', color: '#a8b2d1m', fontSize: '15px', padding: '20px', zIndex: 99, }}>
              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.

              </p>            </section>
            <section style={{ display: 'flex', marginTop: '10px', justifyContent: 'flex-start', gap: '40px' }}>
              <p>NextJs</p>
              <p>GraphQl</p>
              <p>NextJs</p>
              <p>GraphQl</p>
            </section>
          </section>
        </div>
        <div style={{ flexBasis: '130%' }}>
          <Card cardVariants={cardVariantsSettings}>
            <img style={{ width: '100%' }} src={MindMover.src} />
          </Card>
        </div>
      </section>
    </section>
  );
};

export default Projects;
