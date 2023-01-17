import React from "react";

import DocsPage from "../../components/DocsPage";

const Rules: React.FC = () => {
    return (
        <DocsPage id="rules" title="游戏规则" source="/src/pages/rules/index.tsx">
            <p>为了防止服务器被破坏, 为了守护服务器的和平, 为了防止被关小黑屋, 请查看并遵守以下的守则.</p>

            <ol>
                <li>禁止使用外挂或其他方式破坏游戏的平衡性.</li>
                <li>禁止对服务器进行攻击.</li>
                <li>禁止偷抢他人物品.</li>
                <li>禁止破坏他人建筑物.</li>
                <li>请文明用语.</li>
            </ol>

            <p>
                目前已有多名玩家因违反规则而被列入黑名单, 他们的名字已经在主城被贴出公示.
                <br />
                如果你发现其他玩家有违反规则的行为, 可以直接在群里举报, 管理员会及时进行回档或封禁处理.
            </p>

            <p><del>服主现在非常渴望有熊孩子出现, 这样就能折磨他们了</del></p>
        </DocsPage>
    );
}

export default Rules;
