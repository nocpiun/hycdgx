import React, { useState, useRef, useEffect } from "react";

import ButtonLink from "../../components/ButtonLink";
import banner from "../../static/banner.png";
import { qq } from "../../global";
import Utils from "../../utils";

const Header: React.FC = () => {
    const posInitValue = [-1, -1]; // [x, y]
    const zoomIn = 1.15; // zoom in percent (115%)
    const bannerSize = useRef<number[] | null>(null);
    const [mousePos, setMousePos] = useState<number[]>(posInitValue);
    
    const handleMouseMove = (e: React.MouseEvent) => {
        if(!bannerSize.current) return;
        if(window.screen.width <= 768) return;
        const bs = bannerSize.current;

        const header = Utils.getElem("header");
        const width = header.clientWidth;
        const height = header.clientHeight;

        var x = -(e.clientX - width / 2);
        var y = -(e.clientY - height / 2);

        if(y > 0) y = 0;
        if(x > 0) x = 0;
        if(Math.abs(x) + width > bs[0] * zoomIn) x = -(bs[0] * zoomIn - width);
        if(Math.abs(y) + height > bs[1] * zoomIn) y = -(bs[1] * zoomIn - height);

        setMousePos([x, y]);
    };

    const handleMouseLeave = () => {
        if(window.screen.width <= 768) return;
        setMousePos(posInitValue);
    };

    useEffect(() => {
        // get the size of the background image
        Utils.getImageSize(banner)
            .then((size) => {
                bannerSize.current = size;
            })
            .catch((err) => { throw err });
    }, []);

    return (
        <header
            className="header-container"
            id="header"
            style={{ backgroundPosition: Utils.arrayIs(mousePos, posInitValue) ? `${mousePos[0]}px ${mousePos[1]}px` : "center" }}
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={() => handleMouseLeave()}>
            <div className="banner">
                <div className="header-content">
                    <div className="title">
                        <h1>HYCDGX</h1>
                        <p>一个小型Minecraft生存服</p>
                    </div>
                    <div className="quick-start-bar">
                        <ButtonLink to="/docs/quick-start">快速开始</ButtonLink>
                        <ButtonLink to={qq} newtab>加入QQ群</ButtonLink>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
