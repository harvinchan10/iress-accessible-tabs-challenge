import React from 'react';
import type { TabProps } from './Tab.model';

const Tab: React.FC<TabProps> = (props) => {
    const { title } = props;
    return <>{title}</>
}

export default Tab;