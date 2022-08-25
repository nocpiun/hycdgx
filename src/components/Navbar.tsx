import React, { useState, useEffect } from "react";
import Axios from "axios";

const Navbar: React.FC = () => {
    const [hitokoto, setHitokoto] = useState("");

    useEffect(() => {
        Axios.get<{ hitokoto: string }>("https://v1.hitokoto.cn")
            .then((res) => {
                setHitokoto(res.data.hitokoto);
            })
            .catch((err) => {
                throw err;
            });
    }, []);

    return (
        <nav>
            <ul>
                <li className="homepage-link">
                    <a href="/">HYCDGX</a>
                </li>
                <li>
                    <a href="/quick-start">快速开始</a>
                </li>
                <li>
                    <a href="/rules">游戏规则</a>
                </li>
                <li>
                    <a href="/pictures">游戏截图</a>
                </li>
                <li>
                    <a href="http://map.hycdgx.com" target="_blank" rel="noreferrer">地图</a>
                </li>
                <li>
                    <a href="/about">关于</a>
                </li>

                <li className="hitokoto" title="Hitokoto">{hitokoto}</li>
            </ul>
        </nav>
    );
}

export default Navbar;
