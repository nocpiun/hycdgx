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
