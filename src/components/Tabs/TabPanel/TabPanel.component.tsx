import React, { useContext } from 'react';
import { classNames } from '../../../shared/styles/classnames';
import TabContext from '../Tab.context';
import type { TabPanelProps } from './TabPanel.model';
import './TabPanel.style.css'

const TabPanel: React.FC<TabPanelProps> = (props) => {
    const { children, id } = props;

    const tabs = useContext(TabContext);

    const active = tabs.activeId === props.id

    return (
        <div
            id={id}
            className={classNames("tab-panel tab-panel__container", active ? "is-active" : "")}
            tabIndex={0}
            role="tabpanel"
            aria-labelledby={id}
        >
            {children}
        </div>
    )
}

export default TabPanel;