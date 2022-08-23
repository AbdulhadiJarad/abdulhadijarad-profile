import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMe from './AboutMe';
import MinProjects from './MinProjects';
import RecentCompanies from './RecentCompanies';
import SocialConnection from './SocialConnection';
import Summary from './Summary/index';
import Contact from './Contact';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Abdulhadi Jarad</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <SocialConnection /> */}
      <div style={{ margin: '0px auto', maxWidth: 900}}>
        <Summary />
        <AboutMe />
        <RecentCompanies />
        <MinProjects />
        <Contact />
      </div>
    </div>
  );
}

export default Home
