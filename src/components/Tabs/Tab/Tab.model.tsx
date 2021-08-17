import type { ReactNode } from "react";
import type { GenericTabProps } from "../Tabs.model";

export interface TabProps extends GenericTabProps {
    children?: ReactNode;
}