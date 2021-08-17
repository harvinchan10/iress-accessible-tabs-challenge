import React from 'react';
import TabItem from './Tab/Tab.component';
import TabPanel from './TabPanel/TabPanel.component';
import type { TabsProps } from './Tabs.model';

const Tabs: React.FC<TabsProps> = (props) => {
    const { items } = props;

    return <>
        {items && items.map((t, i) => <TabItem key={i} {...t} />)}
        {items && items.map((t, i) => <TabPanel key={i} {...t} />)}
    </>
}

export default Tabs;