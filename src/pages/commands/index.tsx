import React from "react";

import DocsPage from "../../components/DocsPage";

const Commands: React.FC = () => {
    return (
        <DocsPage id="commands" title="常用指令" source="/src/pages/commands/index.tsx">
            <p>*注: "[ ]" 意为必填项; "( )" 意为可选项.</p>

            <ol>
                <li><code>/cd</code> 打开主菜单</li>
                <li><code>/register [密码] [重复密码]</code> 新玩家 注册游戏内账号与密码</li>
                <li><code>/login [密码]</code> 登录游戏</li>
                <li><code>/dynmap webregister</code> 获取环服地图网站注册口令</li>
                <li><code>/spawn</code> 传送到主城</li>
                <li><code>/back</code> 返回上一个传送点 或 返回死亡处</li>
                <li><code>/home (家名称)</code> 查看家列表 或 传送到指定的家</li>
                <li><code>/homes</code> 查看家列表</li>
                <li><code>/sethome [家名称]</code> 在当前位置设置新家</li>
                <li><code>/delhome [家名称]</code> 删除指定的家</li>
                <li><code>/warp (地标名称)</code> 查询地标列表 或 传送到指定地标</li>
                <li><code>/tpa [玩家名]</code> 请求传送到指定玩家的位置</li>
                <li><code>/tpahere [玩家名]</code> 请求指定玩家传送到当前位置</li>
                <li><code>/tpaccept</code> 接受传送请求</li>
                <li><code>/tpdeny</code> 拒绝传送请求</li>
                <li><code>/res create [领地名]</code> 用木棍选择区域后创建领地</li>
                <li><code>/res tp [领地名]</code> 传送到指定领地</li>
                <li><code>/bal</code> 查询钱包余额</li>
                <li><code>/baltop</code> 查询钱包余额排行榜</li>
                <li><code>/pay [玩家名] [金额]</code> 向指定玩家支付指定金额</li>
                <li><code>/afk</code> 进入 或 退出AFK模式</li>
                <li><code>/co i</code> 进入 或 退出查询模式, 在该模式中点击方块可查询方块改动或交互情况</li>
                <li><code>/flyc</code> 进入 或 退出飞行模式, 该模式在飞行时将消耗飞行能量</li>
                <li><code>/flightcharge moneycharge [飞行能量值]</code> 充值飞行能量</li>
                <li><code>/hat</code> 将主手上的物品戴到头上</li>
                <li><code>/suicide</code> 自杀</li>
                <li><code>/colors</code> 查询可用的颜色字符</li>
                <li><code>/msg [玩家名] [内容]</code> 与指定玩家私密聊天</li>
                <li><code>/tps</code> 查询服务器TPS</li>
            </ol>
        </DocsPage>
    );
}

export default Commands;
