/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, ReactElement } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Axios from "axios";

import Utils from "../../utils";
import { Motd, ServerCardProps, ServerInfo, ServerInfoResponse } from "../../types";
import packpng from "../../static/pack.png";

const ServerCard: React.FC<ServerCardProps> = (props) => {
    const [server, setServerInfo] = useState<ServerInfo>({
        online: false,
        icon: packpng,
        name: props.name,
        motd: {
            extra: [],
            text: ""
        },
        players: {
            max: -1,
            now: -1,
            sample: []
        }
    });
    const [motd, setMotd] = useState<ReactElement | null>(null);

    const setMessage = (color: string, message: string) => {
        setServerInfo({
            ...server,
            motd: {
                extra: [{
                    color,
                    text: message
                }],
                text: ""
            }
        });
    };

    const pureText = (text: string, motd: boolean = false) => {
        const parsedMotd = Utils.minecraftTextParser(text);

        return parsedMotd.map((item, i) => {
            var color;
            var effect;
            if(item.colorCode) color = Utils.minecraftCodeParser(item.colorCode);
            if(item.effectCode) effect = Utils.minecraftCodeParser(item.effectCode);

            var classList = [motd ? "motd" : ""];
            if(effect) classList.push(effect);

            return <span
                className={classList.join(" ")}
                style={{ color: color ?? undefined }}
                key={i}>{item.text}</span>;
        });
    };

    useEffect(() => {
        setMessage("gray", "正在连接到服务器...");

        Axios.get<ServerInfoResponse>("https://mcapi.us/server/status?ip="+ props.host +"&port="+ props.port)
            .then((res) => {
                setServerInfo({
                    online: res.data.online,
                    icon: res.data.favicon,
                    name: props.name,
                    motd: res.data.motd_json,
                    players: res.data.players
                });

                if(res.data.error) {
                    setMessage("red", "无法连接到服务器");
                    return;
                }
            })
            .catch((err) => {
                throw err;
            });
    }, [props]);

    // Resolve the motd codes
    useEffect(() => {
        if(!server.motd) return;

        if(typeof server.motd === "string") {
            setMotd(<>{pureText(server.motd, true)}</>);
        } else {
            const cb = (item: Motd, i: number) => {
                var classList = ["motd"];
                if(item.obfuscated) classList.push("garbled");
                if(item.bold) classList.push("bold");
                if(item.strikethrough) classList.push("del");
                if(item.underlined) classList.push("under");
                if(item.italic) classList.push("italic");

                return <span
                    className={classList.join(" ")}
                    style={{ color: item.color ? item.color.replaceAll("_", "") : undefined }}
                    data-color={item.color ? item.color.replaceAll("_", "") : ""}
                    key={i}>{pureText(item.text, true)}{
                        item.extra
                        ? item.extra.map(cb)
                        : null
                    }</span>;
            };

            setMotd(<>{pureText(server.motd.text, true)}{
                server.motd.extra
                ? server.motd.extra.map(cb)
                : null
            }</>);
        }
    }, [server]);

    return (
        <div className="server-card">
            <div className="server-info">
                <img src={server.icon ?? packpng} alt={server.name}/>
                <div className="server-description" title={server.online ? "在线" : ""}>
                    <p>{server.name}</p>
                    <div className="motd-container">{motd}</div>
                </div>
            </div>
            <div className="server-status">
                <OverlayTrigger
                    overlay={server.players.sample.length > 0 ? <Tooltip>
                        {server.players.sample.map(({ name }) => {
                            return pureText(name +"\n");
                        })}
                    </Tooltip> : <></>}>
                    <p>
                        {server.players.now === -1 ? "--" : server.players.now} / {server.players.max === -1 ? "--" : server.players.max}
                    </p>
                </OverlayTrigger>
            </div>
        </div>
    );
}

export default ServerCard;
