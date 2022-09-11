/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

import Header from "./Header";
import Content from "./Content";

import { mainTitle } from "../../global";
import donate from "../../static/donate.png";

const Homepage: React.FC = () => {
    const [isDonating, setIsDonating] = useState(false);

    useEffect(() => {
        document.title = mainTitle;

        document.body.addEventListener("donate", () => {
            setIsDonating(true);
        });
    }, []);

    return (
        <div className="homepage" id="homepage">
            <Header />
            <Content />

            <div
                className="donate"
                style={{ display: isDonating ? "flex" : "none" }}
                onClick={(e) => {
                    const elem = e.target as HTMLElement;
                    if(elem.id !== "donate-img") {
                        setIsDonating(false);
                    }
                }}>
                <Image fluid src={donate} id="donate-img"/>
            </div>
        </div>
    );
}

export default Homepage;
