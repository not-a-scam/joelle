import React from 'react';
import aboutMeImg from '../images/aboutme.png';

function AboutMe() {
    return (
        <section id="aboutme" className="container">
            <div className="x-row">
                <div class="border-img">
                    <img src={aboutMeImg} alt="" />
                </div>
                <div className="aboutme-content">
                    <h2>about me</h2>
                    <p>I am a final year student at School of the Arts, the proud owner of 3 dogs and an avid fan of chocolate cake . The works here are part of my final showcase for my IB assessment and explore the theme of identity through various mediums.</p>
                    <p>I am currently pursuing other interests and have no intention of creating more works.</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;