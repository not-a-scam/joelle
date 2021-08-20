import React from 'react';

function YRowCard(props) {
    return (
        <div className='y-row focus'>
            {
                props.imgs.map((img, index) => {
                    return <img alt="" src={img} className='focus-img' key={index}/>
                })
            }
            <div className="row-content">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <button onClick={props.onClick}>back</button>
            </div>
        </div>
    );
}

export default YRowCard;