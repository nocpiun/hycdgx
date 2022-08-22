import React from "react";

import Page from "../../components/Page";

const About: React.FC = () => {
    return (
        <Page id="about" title="关于" source="/src/pages/about/index.tsx">
            <p>服务器主: @zxwanghongyi</p>
            <p>网站创建及维护: <a href="https://github.com/NriotHrreion" target="_blank" rel="noreferrer">@NriotHrreion</a></p>
            <p>Github Repo: <a href="https://github.com/nocpiun/hycdgx" target="_blank" rel="noreferrer">nocpiun/hycdgx</a></p>
            <p><object data="https://img.shields.io/github/stars/nocpiun/hycdgx.svg?style=social&label=Star" aria-label="Github Stars"></object></p>
        </Page>
    );
}

export default About;
