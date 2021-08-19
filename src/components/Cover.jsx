import React from "react";
import coverImg from "../images/cover.png";

function Cover() {
    return (
        <section id="cover">
            <div class="cover-img">
                <h1 class="top-text">Joelle Yeo</h1>
                <img src={coverImg} alt="cover" />
                <h2 class="bottom-text">IB Showcase</h2>
            </div>
        </section>
    );
}

export default Cover;