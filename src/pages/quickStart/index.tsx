import React, { useState } from "react";
import { Button } from "antd";
import Link from "../../components/Link";

import DocsPage from "../../components/DocsPage";
import Section from "../../components/Section";
import ServerCard from "./ServerCard";
import { qq } from "../../global";
import { ServerCardProps } from "../../types";

const QuickStart: React.FC = () => {
    const hycdgxHosts: ServerCardProps[] = [
        { name: "[ipv6直连] v6only.hycdgx.com (推荐)", host: "v6only.hycdgx.com", port: 25565 },
        { name: "[广州中转] mc.hycdgx.com (推荐)", host: "mc.hycdgx.com", port: 25565 },
        { name: "[进服软件专用] play.hycdgx.com", host: "play.hycdgx.com", port: 25565 },
    ];

    const [serverList, setServerList] = useState<ServerCardProps[]>(hycdgxHosts);

    return (
        <DocsPage id="quick-start" title="快速开始" source="/src/pages/quickStart/index.tsx">
            <p>HYCDGX是一个Minecraft生存服务器, 它不仅是一个生存服, 里面还包括了创造世界, 地皮世界等等内容.</p>
            <p>服务器还安装了货币交易系统和快捷商店插件, 可供玩家在服务器内更方便地获取更多物品.</p>
            <p>同时, 服务器还开放了环服地图网站, 通过它就可以不用进服也能观察服务器了.</p>

            <ul>
                <li>环服地图站: <Link to="http://map.hycdgx.com">http://map.hycdgx.com</Link></li>
                <li>环服地图备用站(ipv6): <Link to="http://v6only.hycdgx.com:8888">http://v6only.hycdgx.com:8888</Link></li>
            </ul>

            <Section title="如何游玩?">
                <p>首先, 你需要确保你的电脑上已经安装了Java 17(或更高版本)和Minecraft启动器</p>
                <p>接下来, 请自助开服</p>
                <p>然后, 服务器有{hycdgxHosts.length}个IP地址供你选择:</p>
                <ol>
                    {hycdgxHosts.map(({ name }, index) => <li key={index}><code>{name}</code></li>)}
                </ol>
                <p>其中, <code>play.hycdgx.com</code> 是进服软件专用地址, 需<a href="/docs/quick-start#配置Tailscale进服">配置Tailscale进服</a>; 所有IP地址的端口均为默认端口. (即Java版25565, 基岩版19132)</p>
            </Section>

            <Section title="自助开服">
                <p>本服务器实行<b>自助开服</b>. 即一般时段服务器保持关闭状态, 当玩家需要进服游玩时, 点击“自助开服”按钮, 则服务器自动开服1小时; 之后若服务器无玩家在线, 则服务器自动关闭, 直到下一位玩家点击“自助开服”。</p>
                <p><b><Link to="http://start.hycdgx.com:8000/start">自助开服（无反应就多点几次）</Link></b></p>
                <p><b><Link to="https://live.bilibili.com/5436698">B站直播间查看服务器状态</Link></b></p>
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
                    <li>下载Tailscale: <Link to="https://tailscale.com/download/">https://tailscale.com/download/</Link></li>
                    <li>安装后会自动弹出登录窗口, 选择微软登录. <b>用户名</b>: <code>hycdgxmc@outlook.com</code> <b>密码</b>: <code>Minecraft8$</code></li>
                    <li>登录后即配置成功, 即可使用<code>play.hycdgx.com</code>进服, 以及<Link to="http://play.hycdgx.com:8888">进服软件专用地图站</Link></li>
                </ol>
                <p>若按照步骤操作时出现任何问题, 敬请进入<Link to={qq}>QQ群</Link>询问!</p>
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
