import { ReactElement } from "react";

interface PropsWithChildren {
    children?: ReactElement | string
}

export interface ButtonLinkProps extends PropsWithChildren {
    to: string
    newtab?: boolean
}
