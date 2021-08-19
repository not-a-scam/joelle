import React from 'react';

function ImgRow(props) {
    return (
        <div class={props.isX ? "x-row" : "y-row"}>
            {props.imgs.map((img) => {
                return <img src={img} alt="" />
            })}
        </div>
    )
}

export default ImgRow;