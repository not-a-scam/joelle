import React, { useState } from 'react';
import aboutMeImg from '../images/aboutme.png';

function AboutMe() {
    const [isMobile, setMQL] = useState( window.innerWidth < 550 ? true: false);
    
    window.addEventListener('resize', () => {
        const mql = window.matchMedia('(max-width: 550px)');
        setMQL(mql.matches);
    });

    return (
        <section id="aboutme">
            {isMobile
                ?<div className="y-row">
                    <img src={aboutMeImg} alt="" />
                    <h2>about me</h2>
                    <p>I am a final year student at School of the Arts, the proud owner of 3 dogs and an avid fan of chocolate cake . The works here are part of my final showcase for my IB assessment and explore the theme of identity through various mediums.</p>
                    <p>I am currently pursuing other interests and have no intention of creating more works.</p>
                </div>
                :<div className="x-row">
                    <img src={aboutMeImg} alt="" />
                    <div className="aboutme-content">
                        <h2>about me</h2>
                        <p>I am a final year student at School of the Arts, the proud owner of 3 dogs and an avid fan of chocolate cake . The works here are part of my final showcase for my IB assessment and explore the theme of identity through various mediums.</p>
                        <p>I am currently pursuing other interests and have no intention of creating more works.</p>
                    </div>
                </div>

            }
        </section>

    );
}

export default AboutMe;