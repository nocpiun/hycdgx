import React from "react";
import { Image } from "antd";

import Page from "../../components/Page";
import ImageBox from "../../components/ImageBox";

// screenshots
import img1 from "../../static/screenshot1.jpg";
import img2 from "../../static/screenshot2.png";
import img3 from "../../static/screenshot3.png";
import img4 from "../../static/screenshot4.png";
import img5 from "../../static/screenshot5.png";
import img6 from "../../static/screenshot6.png";
import img7 from "../../static/screenshot7.png";
import img8 from "../../static/screenshot8.png";
import img9 from "../../static/screenshot9.png";
import img10 from "../../static/screenshot10.png";
import img11 from "../../static/screenshot11.png";
import img12 from "../../static/screenshot12.png";
import img13 from "../../static/screenshot13.png";
import img14 from "../../static/screenshot14.png";
import img15 from "../../static/screenshot15.png";
import img16 from "../../static/screenshot16.png";
import img17 from "../../static/screenshot17.png";

const Pictures: React.FC = () => {
    return (
        <Page id="pictures" title="游戏截图">
            <Image.PreviewGroup>
                <ImageBox src={img1} world="创造服"/>
                <ImageBox src={img2} world="生存旧服" where="AnboFu1999的家"/>
                <ImageBox src={img3} world="生存旧服" where="AnboFu1999的家附近"/>
                <ImageBox src={img4} world="生存旧服" where="天空之城"/>
                <ImageBox src={img5} world="生存旧服" where="主城"/>
                <ImageBox src={img6} world="生存旧服" where="皇后镇"/>
                <ImageBox src={img7} world="地皮世界"/>
                <ImageBox src={img8} world="创造服"/>
                <ImageBox src={img9} world="创造服" where="兔兔咖啡馆"/>
                <ImageBox src={img10} world="创造服"/>
                <ImageBox src={img11} world="生存旧服" where="主城 / 商店"/>
                <ImageBox src={img12} world="生存新服" where="出生点"/>
                <ImageBox src={img13} world="生存新服" where="市中心"/>
                <ImageBox src={img14} world="生存新服" where="地铁总站"/>
                <ImageBox src={img15} world="生存新服" where="Peace Land"/>
                <ImageBox src={img16} world="生存新服" where="wuzhea的树屋"/>
                <ImageBox src={img17} world="生存新服" where="全物品收集站"/>
            </Image.PreviewGroup>
        </Page>
    );
}

export default Pictures;
