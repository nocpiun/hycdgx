import React from "react";
import { Image } from "antd";

import { ImageBoxProps } from "../types";

const ImageBox: React.FC<ImageBoxProps> = (props) => {
    return (
        <div className="image-box">
            <Image src={props.src}/>
            <div className="image-description">
                <h2>{props.world}</h2>
                {props.where ? <p>{props.where}</p> : null}
            </div>
        </div>
    );
}

export default ImageBox;
