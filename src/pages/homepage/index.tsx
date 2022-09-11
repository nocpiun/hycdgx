/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Image } from "antd";

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

            <Image
                src={donate}
                style={{ display: "none" }}
                preview={{
                    visible: isDonating,
                    src: donate,
                    onVisibleChange: (value) => {
                        setIsDonating(value);
                    }
                }}/>
        </div>
    );
}

export default Homepage;
