
export enum AfterType {
    icon = 'icon',
    text = 'text',
}
export interface IItem {
    text: string,
    desc?: string,
    path: string,
    after: {type: AfterType, prefix?: string, code?: string, color?: string, size?: number},
    children?: IItem[]
}

export interface IFunctionItem {
    text: string,
    icon: {code: string, color: string, size?: number},
    onClick: () => void,
    isActive: boolean,
    isNotice: boolean,
    noticeColor?: string,
}
