import React from "react";

import ButtonLink from "../../components/ButtonLink";
import { qq } from "../../global";

const Header: React.FC = () => {
    return (
        <header className="header-container">
            <div className="banner">
                <div className="title">
                    <h1>HYCDGX</h1>
                    <p>一个小型Minecraft生存服</p>
                </div>
                <div className="quick-start-bar">
                    <ButtonLink to="/quick-start">快速开始</ButtonLink>
                    <ButtonLink to={qq} newtab>加入QQ群</ButtonLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
