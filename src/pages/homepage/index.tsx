import React from "react";

import Header from "./Header";
import Content from "./Content";

const Homepage: React.FC = () => {
    return (
        <div className="homepage">
            <Header />
            <Content />
        </div>
    );
}

export default Homepage;
