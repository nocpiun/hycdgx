import { ReactNode } from "react";

interface PropsWithChildren {
    children?: ReactNode | undefined
}

export interface ButtonLinkProps extends PropsWithChildren {
    to: string
    newtab?: boolean
}

export interface PageProps extends PropsWithChildren {
    id?: string
    title: string
    source: string
}

export interface ImageBoxProps {
    src: string
}

export interface ServerPlayer {
    world: string
    armor: number
    name: string
    x: number
    y: number
    z: number
    health: number
    sort: number
    type: string
    account: string
}

export interface ServerInfoResponse {
    currentcount: number
    hasStorm: boolean
    players: ServerPlayer[]
    isThundering: boolean
    confighash: number
    servertime: number
    timestamp: number
}
