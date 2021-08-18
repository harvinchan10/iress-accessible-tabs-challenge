import React, { useEffect, useState } from 'react';
import { KeyboardKeys } from 'src/shared/constants';
import type { TabContextProps } from './Tabs.context';
import TabContext from './Tabs.context';
import TabItem from './Tab/Tab.component';
import TabPanel from './TabPanel/TabPanel.component';
import type { TabsProps } from './Tabs.model';
import "./Tabs.style.css"

const TAB_LOCAL_STORAGE_KEY = "active-tabs";

const Tabs: React.FC<TabsProps> = (props) => {
    const { items, anchoring, title } = props;

    const [activeId, setActiveId] = useState<string>("")

    const itemsIDs = items.map((x) => x.id);

    // Navigate to the given ID + save state on local storage
    const navigateToTab = (id: string) => {
        setActiveId(id);
        setBrowserState(id);
    }

    const retriveLocalStorageState = () => {
        const tabLocalStorage = localStorage.getItem(TAB_LOCAL_STORAGE_KEY);

        if (!tabLocalStorage) {
            return;
        }

        const parsedLocalStorage = JSON.parse(tabLocalStorage);
        const idIndex = parsedLocalStorage.filter((x: string) => itemsIDs.includes(x));

        if (idIndex.length > 0) {
            navigateToTab(idIndex[0]);
        }
    }

    // Get Hash from URL and set active tab
    const retrieveHashId = () => {
        if (!anchoring || !anchoring.prefix) {
            return
        }

        if (!window.location.hash.substring(1).startsWith(anchoring.prefix)) {
            return
        }


        const anchorId = window.location.hash.substring(1 + anchoring.prefix.length)

        // If hash doesnt match any tab ID, dont do anything
        if (items.map((x) => x.id).indexOf(anchorId) < 0) {
            return;
        }

        navigateToTab(anchorId)
    }

    const initializeTabs = () => {
        retriveLocalStorageState();
        retrieveHashId();
    }

    // Set active tab on browser
    const setBrowserState = (id: string) => {
        const tabLocalStorage = localStorage.getItem(TAB_LOCAL_STORAGE_KEY);

        if (!tabLocalStorage) {
            localStorage.setItem(TAB_LOCAL_STORAGE_KEY, JSON.stringify([id]))
            return;
        }

        const parsedLocalStorage = JSON.parse(tabLocalStorage);
        const newLocalStorageData = parsedLocalStorage.filter((x: string) => !itemsIDs.includes(x));

        newLocalStorageData.push(id);
        localStorage.setItem(TAB_LOCAL_STORAGE_KEY, JSON.stringify(newLocalStorageData))
    }

    // Move to selected tab and focus
    const moveToTab = (id: string) => {
        navigateToTab(id);
        (document.querySelector(`[aria-controls=${id}]`) as HTMLElement).focus();
    }

    const moveToPreviousTab = () => {
        const tabIndex = items.map((x) => x.id).indexOf(activeId);
        const targetIndex = tabIndex === 0 ? items.length - 1 : tabIndex - 1;
        moveToTab(items[targetIndex].id);
    }

    const moveToNextTab = () => {
        const tabIndex = items.map((x) => x.id).indexOf(activeId);
        const targetIndex = tabIndex === items.length - 1 ? 0 : tabIndex + 1;
        moveToTab(items[targetIndex].id);
    }

    const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        switch (e.key) {
            case KeyboardKeys.ARROW_LEFT:
                moveToPreviousTab();
                break;
            case KeyboardKeys.ARROW_RIGHT:
                moveToNextTab();
                break;
            case KeyboardKeys.HOME:
                moveToTab(items[0].id);
                break;
            case KeyboardKeys.END:
                moveToTab(items[items.length - 1].id);
                break;

            default:
                break;
        }
    };

    // Initialize active tab
    useEffect(() => {
        if (activeId || items.length === 0) {
            return
        }

        setActiveId(items[0].id)

        initializeTabs();
    }, [])

    // Update active tab on hash change
    useEffect(() => {
        window.addEventListener("hashchange", retrieveHashId)

        return () => window.removeEventListener("hashchange", retrieveHashId)
    }, [])

    const context: TabContextProps = {
        activeId,
        handTabClick: navigateToTab,
    }

    return (
        <TabContext.Provider value={context}>
            <div className="tabs__container">
                <div role="tablist" aria-label={title} onKeyDown={(e) => keyDownHandler(e)}>
                    {items && items.map((t, i) => <TabItem key={i} {...t} />)}
                </div>
                {items && items.map((t, i) => <TabPanel key={i} {...t} />)}
            </div>
        </TabContext.Provider>
    )

}

export default Tabs;