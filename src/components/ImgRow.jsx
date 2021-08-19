import React from 'react';

function ImgRow(props) {
    return (
        <div className={props.isX ? "x-row" : "y-row"}>
            {props.imgs.map((img) => {
                if (!img.isFiller){
                    return <span><img src={img.img} className="gallery-img" alt="" /></span>
                } else {
                    return <span><img src={img.img} alt="" /></span>
                }
            })}
        </div>
    )
}

export default ImgRow;