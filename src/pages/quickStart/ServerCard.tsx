import React from "react";

import { ServerInfo } from "../../types";

const ServerCard: React.FC<ServerInfo> = (props) => {
    return (
        <div className="server-card">
            <div className="server-info">
                <img src={props.icon} alt={props.name}/>
                <div className="server-description" title={props.online ? "在线" : ""}>
                    <p>{props.name}</p>
                    <p>
                        {
                            props.motd.extra.map((item, i) => {
                                var classList = [];
                                if(item.bold) classList.push("bold");
                                if(item.italic) classList.push("italic")

                                return <span className={classList.join(" ")} style={{ color: item.color }} key={i}>{item.text}</span>
                            })
                        }
                    </p>
                </div>
            </div>
            <div className="server-status">
                <p>{props.players.now} / {props.players.max}</p>
            </div>
        </div>
    );
}

export default ServerCard;
