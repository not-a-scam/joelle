import React from 'react';

function ImgCard(props) {
    return (
        <div className="y-row gallery-card">
            {props.imgs.map((img, index) => {
                return <img key={index} src={img} alt=""/>
            })}
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default ImgCard;