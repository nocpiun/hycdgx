import React from "react";

import Page from "../../components/Page";

const QuickStart: React.FC = () => {
    return (
        <Page id="quick-start" title="快速开始" source="/src/pages/quickStart/index.tsx">
            <p>HYCDGX是一个Minecraft生存服务器, 它不仅是一个生存服, 里面还包括了创造世界, 地皮世界等等内容.</p>
            <p>服务器还安装了货币交易系统和快捷商店插件, 可供玩家在服务器内更方便地获取更多物品.</p>
            <p>同时, 服务器还开放了环服地图网站: <a href="https://map.hycdgx.com" target="_blank" rel="noreferrer">https://map.hycdgx.com</a>. 通过这个网站, 就可以不用进服也能观察服务器了.</p>

            <hr />
            <h3>如何游玩?</h3>

            <p>首先, 你需要确保你的电脑上已经安装了Java 17和Minecraft 1.19.x</p>
            <p>接下来, 服务器有3个IP地址供你选择:</p>
            <ol>
                <li>
                    <code>mc.hycdgx.com</code>
                </li>
                <li>
                    <code>hz.hycdgx.com</code>
                </li>
                <li>
                    <code>v6only.hycdgx.com</code>
                </li>
            </ol>
            <p>其中, <code>v6only.hycdgx.com</code> 是ipv6直连的IP地址, 需要你的网络环境支持ipv6.</p>
            <p>本服务器同时支持Java版和基岩版, 两个版本共用这几个IP地址, 且端口均为默认端口. (即Java版25565, 基岩版19132)</p>

            <hr />
            <h3>配置Tailscale进服</h3>

            <p>如果你想提升你在服务器中的游玩体验, 这里推荐配置Tailscale来进入服务器.</p>
            <ol>
                <li>下载Tailscale: <a href="https://tailscale.com/download/" target="_blank" rel="noreferrer">https://tailscale.com/download/</a></li>
                <li>安装后找到软件安装目录, 在空白处按住shift+右键, 选择打开Powershell</li>
                <li>输入 <code>./tailscale.exe up --authkey=tskey-5c3725e9e145984eefedd77e --accept-routes</code></li>
                <li>出现success!就代表配置成功, 即可开始游玩游戏</li>
            </ol>
            <p>若按照步骤操作时出现任何问题, 敬请进入<a href="https://jq.qq.com/?_wv=1027&k=xMKnb2Un" target="_blank" rel="noreferrer">QQ群</a>询问!</p>
        </Page>
    );
}

export default QuickStart;
