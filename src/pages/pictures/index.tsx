import React from "react";

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

const Pictures: React.FC = () => {
    return (
        <Page id="pictures" title="游戏截图" source="/src/pages/pictures/index.tsx">
            <ImageBox src={img1}/>
            <ImageBox src={img2}/>
            <ImageBox src={img3}/>
            <ImageBox src={img4}/>
            <ImageBox src={img5}/>
            <ImageBox src={img6}/>
            <ImageBox src={img7}/>
            <ImageBox src={img8}/>
            <ImageBox src={img9}/>
            <ImageBox src={img10}/>
            <ImageBox src={img11}/>
        </Page>
    );
}

export default Pictures;
