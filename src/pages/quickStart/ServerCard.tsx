/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Axios from "axios";

import { ServerCardProps, ServerInfo, ServerInfoResponse } from "../../types";
import packpng from "../../static/pack.png";

const ServerCard: React.FC<ServerCardProps> = (props) => {
    const [server, setServerInfo] = useState<ServerInfo>({
        online: false,
        icon: packpng,
        name: props.name,
        motd: {
            extra: [{
                color: "gray",
                text: "正在连接到服务器..."
            }],
            text: ""
        },
        players: {
            max: -1,
            now: -1
        }
    });

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

    useEffect(() => {
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

    return (
        <div className="server-card">
            <div className="server-info">
                <img src={server.icon} alt={server.name}/>
                <div className="server-description" title={server.online ? "在线" : ""}>
                    <p>{server.name}</p>
                    <p>
                        {
                            server.motd !== null ? server.motd.extra.map((item, i) => {
                                var classList = ["motd"];
                                if(item.bold) classList.push("bold");
                                if(item.italic) classList.push("italic")

                                return <span
                                    className={classList.join(" ")}
                                    style={{ color: item.color.replaceAll("_", "") }}
                                    data-color={item.color.replaceAll("_", "")}
                                    key={i}>{item.text}</span>
                            }) : null
                        }
                    </p>
                </div>
            </div>
            <div className="server-status">
                <p>{server.players.now === -1 ? "--" : server.players.now} / {server.players.max === -1 ? "--" : server.players.max}</p>
            </div>
        </div>
    );
}

export default ServerCard;
