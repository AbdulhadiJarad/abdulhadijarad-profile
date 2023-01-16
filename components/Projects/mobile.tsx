import type { NextPage } from "next";
import { style } from "./styles";
import { recentCompaniesData } from "./data";
import Image from "next/image";
import MindMover from "../../public/mindmovers.jpg";
import Overlay from "../../shared/Overlay";

const ProjectsMobile: NextPage = () => {
    return (
        <section className="startups projects-mobile" style={style.root}>
            <section className="headingWrapper">
                <span style={style.myNameIs}>
                    <span className="headingNumber">05.</span> Some Things I’ve Built {" "}
                </span>{" "}
                <hr style={style.headingDivider}></hr>
            </section>
            <section style={{ display: 'flex', alignItems: 'center', margin: '0px auto', marginTop: '60px', width: '100%' }}>
                <div style={{ flexBasis: '130%', position: 'relative' }}>
                    <div style={{zIndex: 1}} className='imgContainer' >
                        <img style={{ width: '100%', height: '400px' }} src={MindMover.src} />

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

                            <div style={{ textAlign: 'left', width: '100%', height: '100%', position: 'relative', height: '100%' }}>
                                <section style={{ maxWidth: '100%', zIndex: 99, position: 'absolute', height: 'fit-content', bottom: 0, top: 0, marginBottom: 'auto', marginTop: 'auto', }}>
                                    <p style={{ textAlign: 'left', color: '#64ffda', fontWeight: '400' }}>Featured Project</p>
                                    <p style={{ textAlign: 'left', color: '#ccd6f6', fontWeight: '600', fontSize: 'clamp(24px, 5vw, 28px)' }}>Mind Movers</p>
                                    <section style={{ backgroundColor: '#112240', color: '#ccd6f6', fontSize: '15px', padding: '20px', zIndex: 99, }}>
                                        <p>
                                            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                                        </p>                                    </section>
                                    <section style={{ display: 'flex', marginTop: '10px', justifyContent: 'flex-start', gap: '40px' }}>
                                        <p>NextJs</p>
                                        <p>GraphQl</p>
                                    </section>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            {/*  */}

        </section>
    );
};

export default ProjectsMobile;
