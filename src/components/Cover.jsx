import React from "react";
import coverImg from "../images/cover.png";

function Cover() {
    return (
        <section id="cover" className="container">
            <div className="cover-img">
                <h1 className="top-text">Joelle Yeo</h1>
                <img src={coverImg} alt="cover" />
                <h2 className="bottom-text">IB Showcase</h2>
            </div>
        </section>
    );
}

export default Cover;