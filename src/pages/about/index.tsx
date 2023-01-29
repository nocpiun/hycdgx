import React from "react";

import Page from "../../components/Page";
import Link from "../../components/Link";

const About: React.FC = () => {
    return (
        <Page id="about" title="关于">
            <p>服务器主: <Link to="https://space.bilibili.com/109193347">@zxwanghongyi</Link></p>
            <p>网站创建及维护: <Link to="https://space.bilibili.com/167995410">@NriotHrreion</Link></p>
            <p>Github Repo: <Link to="https://github.com/nocpiun/hycdgx">nocpiun/hycdgx</Link></p>
            <p><object data="https://img.shields.io/github/stars/nocpiun/hycdgx.svg?style=social&label=Star" aria-label="Github Stars"></object></p>
        </Page>
    );
}

export default About;
