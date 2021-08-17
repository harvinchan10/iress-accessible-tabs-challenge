import type { TabProps } from "./Tab/Tab.model";

export interface TabsProps {
    title: string;
    items: TabProps[];

    /** Whether to sync the current active tab with the URL anchor / hash */
    anchoring?: {
        /** The prefix to use for the URL anchor */
        prefix: string
    }
}

export interface GenericTabProps {
    id: string;
    isActive?: boolean;
    title: string;
}