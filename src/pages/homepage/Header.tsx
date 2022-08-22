import React from "react";

import ButtonLink from "../../components/ButtonLink";

const Header: React.FC = () => {
    return (
        <header className="header-container">
            <div className="banner">
                <div className="title">
                    <h1>HYCDGX</h1>
                    <p>一个小型Minecraft生存服</p>
                </div>
                <div className="quick-start-bar">
                    <ButtonLink to="/">快速开始</ButtonLink>
                    <ButtonLink to="https://jq.qq.com/?_wv=1027&k=5tNAp0k" newtab>加入QQ群</ButtonLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
