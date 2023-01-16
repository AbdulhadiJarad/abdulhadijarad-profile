import type { NextPage } from 'next';
import dynamic from "next/dynamic";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
const AboutMe = dynamic(() => import("./AboutMe"), {
  ssr: false,
});
const Competitions = dynamic(() => import("./Competitions"), {
  ssr: false,
});
const Contact = dynamic(() => import("./Contact"), {
  ssr: false,
});

const Summary = dynamic(() => import("./Summary"), {
  ssr: false,
});

const Courses = dynamic(() => import("./Courses"), {
  ssr: false,
}); const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
});
const WebHeader = dynamic(() => import("./Header/web"), {
  ssr: false,
});

const MinProjects = dynamic(() => import("./MinProjects"), {
  ssr: false,
});
const Projects = dynamic(() => import("./Projects"), {
  ssr: false,
});
const RecentCompanies = dynamic(() => import("./RecentCompanies"), {
  ssr: false,
});
const SocialConnection = dynamic(() => import("./SocialConnection"), {
  ssr: false,
});

const ProjectsMobile = dynamic(() => import("./Projects/mobile"), {
  ssr: false,
});

const Recommendations = dynamic(() => import("./Recommendations"), {
  ssr: false,
});


export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}


const Home: NextPage = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [loading, isLoading] = useState(true);

  useEffect(() => {
    if (typeof window != undefined) {
      isLoading(false)
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Abdulhadi Jarad</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <WebHeader />
      {!loading ? <>
        <SocialConnection />
        <Summary />
        <div style={{ maxWidth: 950, margin: '0px auto' }}>
          <AboutMe />
          <RecentCompanies />
          <Projects />
          <MinProjects />
          <Competitions />
          <Courses />
          <ProjectsMobile />
          <Contact />
        </div>
        <Recommendations />
        <Footer />
      </> : <></>}
    </div>
  );
}

export default Home
