import React, { useEffect, useState } from 'react';
import { KeyboardKeys } from '../../shared/constants';
import type { TabContextProps } from './Tab.context';
import TabContext from './Tab.context';
import TabItem from './Tab/Tab.component';
import TabPanel from './TabPanel/TabPanel.component';
import type { TabsProps } from './Tabs.model';
import "./Tabs.style.css"

const Tabs: React.FC<TabsProps> = (props) => {
    const { items, anchoring } = props;

    const [activeId, setActiveId] = useState<string>("")

    const retreiveTabFromAnchor = () => {
        if (!anchoring || !anchoring.prefix) {
            return
        }

        if (!window.location.hash.substring(1).startsWith(anchoring.prefix)) {
            return
        }

        const anchorId = window.location.hash.substring(1 + anchoring.prefix.length)

        setActiveId(anchorId)
    }



    const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        switch (e.key) {
            case KeyboardKeys.ARROW_LEFT:
                console.log('arrow left');
                break;

            default:
                break;
        }
    };

    // Reset active id to first if it's not valid
    useEffect(() => {
        if (!items.length || items.filter(e => e.id === activeId).length > 0) {
            return
        }

        setActiveId(items[0].id)
    }, [activeId])

    // Initialize active tab
    useEffect(() => {
        if (activeId || items.length === 0) {
            return
        }

        setActiveId(items[0].id)

        retreiveTabFromAnchor()
    }, [])

    // Sync anchor with active tab id
    useEffect(() => {
        if (!anchoring || !anchoring.prefix || !activeId) {
            return
        }

        window.location.hash = `#${anchoring.prefix}${activeId}`
    }, [activeId])

    useEffect(() => {
        window.addEventListener("hashchange", retreiveTabFromAnchor)

        return () => window.removeEventListener("hashchange", retreiveTabFromAnchor)
    }, [])

    const context: TabContextProps = {
        activeId,
        setActiveId,
    }

    return (
        <TabContext.Provider value={context}>
            <div className="tabs-container">
                <div role="tablist" onKeyDown={(e) => keyDownHandler(e)}>
                    {items && items.map((t, i) => <TabItem key={i} {...t} />)}
                </div>
                {items && items.map((t, i) => <TabPanel key={i} {...t} />)}
            </div>
        </TabContext.Provider>
    )

}

export default Tabs;