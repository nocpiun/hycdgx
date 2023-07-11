import React from "react";
import { Card, Button } from "antd";

import Link from "../../components/Link";

const Content: React.FC = () => {
    const donateHandle = () => {
        document.body.dispatchEvent(new Event("donate"));
    };

    return (
        <div className="content-container">
            <Card title="简介" extra={
                <>
                    <a href="/docs/quick-start">快速开始</a>
                    <Link to="https://www.bilibili.com/video/BV1rC4y1b7GB">宣传片</Link>
                </>
            }>
                HYCDGX是一个Minecraft生存服务器, 它不仅是一个生存服, 里面还包括了创造世界, 地皮世界等等.
                <br /><br />
                本服务器一般处于关闭状态，当玩家要进服时点击上方的“自助开服”按钮，服务器自动开启，玩家下线后服务器自动关闭。
            </Card>
            <Card title="服务器信息">
                服务器目前已全面支持1.19.x版本<br />
                1.20.x目前已支持进服
                <br /><br />
                IP: mc.hycdgx.com<br />
                端口: 25565 (基岩版 19132)<br />
                版本: Minecraft Java & Bedrock 1.19.x
            </Card>
            <Card title="赞助" extra={<Button type="link" onClick={() => donateHandle()}>捐助我们</Button>}>
                请注意您氪金后 <b>无法</b> 获得任何物品, 您的捐款会添置到服务器配置, 网络宽带等地方. 谢谢您的支持!
                <br /><br />
                在您捐款后, 您的名字将会出现在服务器内的赞助榜.
            </Card>
        </div>
    );
}

export default Content;
