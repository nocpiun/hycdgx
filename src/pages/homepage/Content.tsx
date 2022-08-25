import React from "react";
import { Card } from "react-bootstrap";

import { qq } from "../../global";

const Content: React.FC = () => {
    return (
        <div className="content-container">
            <Card>
                <Card.Body>
                    <Card.Title>简介</Card.Title>
                    <Card.Text>
                        HYCDGX是一个Minecraft生存服务器, 它不仅是一个生存服, 里面还包括了创造世界, 地皮世界等等内容.
                        <br /><br />
                        服务器还安装了货币交易系统, 可供玩家在服务器内通过货币换取更多物品.
                    </Card.Text>
                    <Card.Link href="/quick-start">快速开始</Card.Link>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>服务器信息</Card.Title>
                    <Card.Text>
                        服务器目前已全面支持1.19.x版本<br />
                        新生存坑已开启, 欢迎前来开荒!
                        <br /><br />
                        IP: mc.hycdgx.com<br />
                        端口: 25565 (基岩版 19132)<br />
                        版本: Minecraft Java & Bedrock 1.19.x
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>赞助</Card.Title>
                    <Card.Text>
                        请注意您氪金后 <b>无法</b> 获得任何物品, 您的捐款会添置到服务器配置, 网络宽带等地方. 谢谢您的支持!
                        <br /><br />
                        在您捐款后, 您的名字将会出现在服务器内的赞助榜.
                    </Card.Text>
                    <Card.Link href="/donate.png" target="_blank">Donate</Card.Link>
                    <Card.Link href={qq} target="_blank">加入QQ群</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Content;
