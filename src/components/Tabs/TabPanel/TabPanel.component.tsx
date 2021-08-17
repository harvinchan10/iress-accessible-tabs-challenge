import React from 'react';
import type { TabPanelProps } from './TabPanel.model';
import './TabPanel.style.css'

const TabPanel: React.FC<TabPanelProps> = (props) => {
    const { children } = props;

    return <div className="tab-panel tab-panel__container">{children}</div>
}

export default TabPanel;