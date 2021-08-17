import type { ReactNode } from "react";
import type { GenericTabProps } from "../Tabs.model";

export interface TabPanelProps extends GenericTabProps {
    children?: ReactNode;
}