import type { NextPage } from "next";
import { style } from "./styles";

const ProjectsMobile = () => {
    return (
        <section id="featuredMobile" className="startups projects-mobile" style={style.root}>
            <section className="headingWrapper">
                <span style={style.myNameIs}>
                    <span className="headingNumber">03.</span> Some Things I’ve Built {" "}
                </span>{" "}
                <hr style={style.headingDivider}></hr>
            </section>
            <section style={{ display: 'flex', alignItems: 'center', margin: '0px auto', marginTop: '60px', width: '100%' }}>
                <div style={{ flexBasis: '130%', position: 'relative' }}>
                    <div style={{ zIndex: 1 }} className='imgContainer' >
                        <img style={{ width: '100%', height: '400px' }} src={'mindmovers.jpg'} />

                        <div className="projectsOverlay">
                        </div>
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        // left: '50%',
                        width: '90%',
                        left: '50%',
                        zIndex: 2,
                        transform: 'translate(-50%, -50%)',
                    }}>
                        <section style={{ display: 'flex', alignItems: 'center', width: '100%', opacity: '1', zIndex: 99999 }}>

                            <div style={{ textAlign: 'left', width: '100%', height: '100%', position: 'relative', }}>
                                <section style={{ maxWidth: '100%', zIndex: 99, position: 'absolute', height: 'fit-content', bottom: 0, top: 0, marginBottom: 'auto', marginTop: 'auto', }}>
                                    <p style={{ textAlign: 'left', color: '#64ffda', fontWeight: '400' }}>Featured Project</p>
                                    <p style={{ textAlign: 'left', color: '#ccd6f6', fontWeight: '600', fontSize: 'clamp(24px, 5vw, 28px)' }}>Mind Movers</p>
                                    <section style={{ backgroundColor: '#112240', color: '#ccd6f6', fontSize: '15px', padding: '20px', zIndex: 99, }}>
                                        <p style={{ color: 'rgb(136, 146, 176)'}}>
                                            an immersive e-learning platform for the Arab world to develop personal and professional skills.
                                            <br />I worked as a frontend technical leader.
                                            <br />
                                            <a rel="noreferrer" target={'_blank'} href="https://mindmovers.com/"><span style={{ color: 'rgb(100, 255, 218)' }}>Discover</span></a>
                                        </p>                                 </section>
                                    <section style={{ display: 'flex', marginTop: '10px', justifyContent: 'flex-start', gap: '40px' }}>
                                        <p>NextJs</p>
                                        <p>MUI5</p>
                                        <p>GraphQL</p>
                                        <p>Stripe</p>
                                    </section>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            {/*  */}
            <section style={{ display: 'flex', alignItems: 'center', margin: '0px auto', marginTop: '60px', width: '100%' }}>
                <div style={{ flexBasis: '130%', position: 'relative' }}>
                    <div style={{ zIndex: 1 }} className='imgContainer' >
                        <img style={{ width: '100%', height: '400px' }} src={'gp.jpg'} />
                        <div className="projectsOverlay">
                        </div>
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        // left: '50%',
                        width: '90%',
                        left: '50%',
                        zIndex: 2, 
                        transform: 'translate(-50%, -50%)',
                    }}>
                        <section style={{ display: 'flex', alignItems: 'center', width: '100%', opacity: '1', zIndex: 99999 }}>

                            <div style={{ textAlign: 'left', width: '100%', height: '100%', position: 'relative', }}>
                                <section style={{ maxWidth: '100%', zIndex: 99, position: 'absolute', height: 'fit-content', bottom: 0, top: 0, marginBottom: 'auto', marginTop: 'auto', }}>
                                    <p style={{ textAlign: 'left', color: '#64ffda', fontWeight: '400' }}>Featured Project</p>
                                    <p style={{ textAlign: 'left', color: '#ccd6f6', fontWeight: '600', fontSize: 'clamp(21px, 5vw, 18px)' }}>Blockchain Lifelong Learning Record</p>
                                    <section style={{ backgroundColor: '#112240', color: '#ccd6f6', fontSize: '15px', padding: '20px', zIndex: 99, }}>
                                        <p style={{ color: 'rgb(136, 146, 176)'}}>
                                            The Project is a platform that enable learners to move their learning records from one institution to another in a secure and verifiable format.
                                            I worked as dApp Developer using React & Web3.js
                                            <br />
                                            <a rel="noreferrer" target={'_blank'} href="https://gitlab.com/AbdulhadiJarad/llrs-gp-admin"><span style={{ color: 'rgb(100, 255, 218)' }}>Discover</span></a>
                                        </p>                                    </section>
                                    <section style={{ display: 'flex', marginTop: '10px', justifyContent: 'flex-start', gap: '40px' }}>
                                        <p>ReactJS</p>
                                        <p>Solidaty</p>
                                        <p>Web3</p>
                                    </section>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ProjectsMobile;
