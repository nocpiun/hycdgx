import React, { useId, useEffect } from "react";
import { Image as ImageContainer, ImageProps } from "antd";

import Utils from "../utils";

const LoadedImage: React.FC<ImageProps> = (props) => {
    const id = useId();

    useEffect(() => {
        var image = new Image();
        image.addEventListener("load", () => {
            Utils.getElem<HTMLImageElement>(id).src = image.src;
        });
        image.src = props.src || "";
    });

    return <ImageContainer id={id} {...props}/>
}

export default LoadedImage;
