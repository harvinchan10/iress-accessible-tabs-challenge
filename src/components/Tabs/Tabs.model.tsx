import type { TabProps } from "./Tab/Tab.model";

export interface TabsProps {
    items?: TabProps[];
}

export interface GenericTabProps {
    isActive?: boolean;
    tabIndex?: number;
    title: string;
}