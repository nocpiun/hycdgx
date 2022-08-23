import React from "react";
import { Image } from "react-bootstrap";

import { ImageBoxProps } from "../types";

const ImageBox: React.FC<ImageBoxProps> = (props) => {
    return (
        <div className="image-box">
            <Image src={props.src} fluid/>
        </div>
    );
}

export default ImageBox;
