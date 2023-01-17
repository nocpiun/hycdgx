import { ReactNode } from "react";

interface PropsWithChildren {
    children?: ReactNode | undefined
}

interface PlayersInfo {
    max: number
    now: number
    sample: {
        name: string
        id: string
    }[]
}

export interface Motd {
    extra?: Motd[]
    obfuscated?: boolean
    bold?: boolean
    strikethrough?: boolean
    underlined?: boolean
    italic?: boolean
    color?: string
    text: string
}

export interface ButtonLinkProps extends PropsWithChildren {
    to: string
    newtab?: boolean
}

export interface PageProps extends PropsWithChildren {
    id?: string
    title: string
}

export interface DocsPageProps extends PageProps {
    source: string
}

export interface PageSectionProps extends PropsWithChildren {
    title: string
}

export interface ImageBoxProps {
    src: string
    world: string
    where?: string
}

export interface ServerCardProps {
    name: string
    host: string
    port: number
}

export interface ServerInfo {
    online: boolean
    icon: string
    name: string
    motd: Motd | string
    players: PlayersInfo
}

export interface ServerInfoResponse {
    status: string
    online: boolean
    motd: string
    motd_json: Motd | string
    favicon: string
    error: string | null
    players: PlayersInfo
    server: {
        name: string
        protocol: number
    }
    lastUpdated: string
    duration: string
}
