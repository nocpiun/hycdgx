import React, { useEffect } from "react";

import Header from "./Header";
import Content from "./Content";

import { mainTitle } from "../../global";

const Homepage: React.FC = () => {
    useEffect(() => {
        document.title = mainTitle;
    }, []);

    return (
        <div className="homepage">
            <Header />
            <Content />
        </div>
    );
}

export default Homepage;
