import React from 'react';

function ImgRow(props) {
    return (
        <div className={props.isX ? "x-row" : "y-row"}>
            {props.imgs.map((img) => {
                return <span key={img.id}>
                    {img.isFiller 
                        ?<img src={img.img} alt="" />
                        :<img src={img.img} className="gallery-img" alt=""/>
                    }
                </span>
            })}
        </div>
    )
}

export default ImgRow;