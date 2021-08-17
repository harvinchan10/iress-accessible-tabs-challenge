import React, { useContext } from 'react';
import { classNames } from '../../../shared/styles/classnames';
import TabContext from '../Tab.context';
import type { TabProps } from './Tab.model';
import "./Tab.style.css"

const Tab: React.FC<TabProps> = (props) => {
    const { title, id } = props;
    const tabs = useContext(TabContext);

    const active = tabs.activeId === props.id

    return (
        <button
            onClick={() => tabs.handTabClick(id)}
            className={classNames("tab-head", active ? "is-active" : "")}
            tabIndex={active ? undefined : -1}
            role="tab"
            aria-selected={active}
            aria-controls={id}
        >
            {title}
        </button>)
}

export default Tab;