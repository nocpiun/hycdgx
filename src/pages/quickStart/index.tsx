import React, { useState } from "react";
import { Button } from "antd";

import DocsPage from "../../components/DocsPage";
import Section from "../../components/Section";
import ServerCard from "./ServerCard";
import { qq } from "../../global";
import { ServerCardProps } from "../../types";

const QuickStart: React.FC = () => {
    const hycdgxHosts: ServerCardProps[] = [
        { name: "HYCDGX 服务器 (mc.hycdgx.com)", host: "mc.hycdgx.com", port: 25565 },
        { name: "HYCDGX 服务器 (play.hycdgx.com)", host: "play.hycdgx.com", port: 25565 },
        { name: "HYCDGX 服务器 (v6only.hycdgx.com)", host: "v6only.hycdgx.com", port: 25565 },
        { name: "HYCDGX 服务器 (la.hycdgx.com)", host: "la.hycdgx.com", port: 25565 },
    ];

    const [serverList, setServerList] = useState<ServerCardProps[]>(hycdgxHosts);

    return (
        <DocsPage id="quick-start" title="快速开始" source="/src/pages/quickStart/index.tsx">
            <p>HYCDGX是一个Minecraft生存服务器, 它不仅是一个生存服, 里面还包括了创造世界, 地皮世界等等内容.</p>
            <p>服务器还安装了货币交易系统和快捷商店插件, 可供玩家在服务器内更方便地获取更多物品.</p>
            <p>同时, 服务器还开放了环服地图网站: <a href="http://map.hycdgx.com" target="_blank" rel="noreferrer">http://map.hycdgx.com</a>. 通过这个网站, 就可以不用进服也能观察服务器了.</p>

            <Section title="如何游玩?">
                <p>首先, 你需要确保你的电脑上已经安装了Java 17和Minecraft启动器</p>
                <p>接下来, 服务器有3个IP地址供你选择:</p>
                <ol>
                    {hycdgxHosts.map(({ host }, index) => <li key={index}><code>{host}</code></li>)}
                </ol>
                <p>其中, <code>play.hycdgx.com</code> 是进服软件专用地址, 需<a href="/quick-start#配置Tailscale进服">配置Tailscale进服</a>; <code>v6only.hycdgx.com</code> 是ipv6专用地址, 需网络支持ipv6; <code>la.hycdgx.com</code> 是北美区进服地址.</p>
                <p>本服务器同时支持Java版和基岩版, 两个版本共用这几个IP地址, 且端口均为默认端口. (即Java版25565, 基岩版19132)</p>
            </Section>

            <Section title="版本要求">
                <ul>
                    <li>对于Java版玩家, 除远古版本外, 其他版本皆可进入服务器.</li>
                    <li>对于基岩版玩家, 需用最新版本进服.</li>
                </ul>
            </Section>

            <Section title="配置Tailscale进服">
                <p>如果你想提升你在服务器中的游玩体验, 这里推荐配置Tailscale来进入服务器.</p>
                <ol>
                    <li>下载Tailscale: <a href="https://tailscale.com/download/" target="_blank" rel="noreferrer">https://tailscale.com/download/</a></li>
                    <li>安装后会自动弹出登录窗口, 选择微软登录. <b>用户名</b>: <code>hycdgxmc@outlook.com</code> <b>密码</b>: <code>Minecraft8$</code></li>
                    <li>登录后即配置成功, 即可使用<code>play.hycdgx.com</code>进服, 以及<a href="http://play.hycdgx.com:8888" target="_blank" rel="noreferrer">进服软件专用地图站</a></li>
                </ol>
                <p>若按照步骤操作时出现任何问题, 敬请进入<a href={qq} target="_blank" rel="noreferrer">QQ群</a>询问!</p>
            </Section>

            <Section title="服务器状态">
                {serverList.map((cardProps, i) => {
                    return <ServerCard {...cardProps} key={i}/>
                })}

                <Button
                    className="ping-edit"
                    onClick={() => {
                        var name = prompt("服务器名称", "Minecraft 服务器");
                        var ip = prompt("服务器IP (example.com:25565)");

                        if(name && ip) {
                            var splited = ip.split(":");
                            var port = splited.length === 2 ? parseInt(splited[1]) : 25565;

                            setServerList([
                                ...serverList,
                                { name, host: splited[0], port }
                            ]);
                        }
                    }}>添加</Button>
            </Section>
        </DocsPage>
    );
}

export default QuickStart;
