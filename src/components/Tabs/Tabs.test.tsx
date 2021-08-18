import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import Tabs from './Tabs.component';
import { mockData, mockData2 } from "./Tabs.mockData";
import { sendKeys } from '@web/test-runner-commands';


describe('<Tabs>', () => {
    const renderTab = () => {
        const { getByText, container } = render(<Tabs {...mockData} />);

        return {
            container,
            tab1: getByText(mockData.items[0].title),
            tab2: getByText(mockData.items[1].title),
            tab3: getByText(mockData.items[2].title)
        }
    }

    it('renders without crashing', () => {
        const { tab1 } = renderTab();
        expect(document.body.contains(tab1));
    });

    it('navigate to another tab', () => {
        const { tab2 } = renderTab();
        tab2.click();

        expect(tab2.classList.contains("is-active")).to.be.true;
    });

    // Test browser Refresh/Back/Forward state preservation
    it('Check if state was preserved from previous test', async () => {
        const { tab2 } = renderTab();

        expect(tab2.classList.contains("is-active")).to.be.true;
    });

    it('navigate to another tab via keyboard', async () => {
        const { tab1, tab2 } = renderTab();

        // Move active tab to Tab One - previous test state is saved on local storage
        tab1.click();
        tab1.focus();

        await sendKeys({
            press: 'ArrowRight',
        });

        expect(tab2.classList.contains("is-active")).to.be.true;
    });

    it('hash change to change active tab ', async () => {
        const { tab1, tab2 } = renderTab();

        // Move active tab to Tab One - previous test state is saved on local storage
        tab1.click();

        // Change hash to Tab 2's ID
        window.location.hash = `#${mockData.anchoring.prefix}${mockData.items[1].id}`
        window.dispatchEvent(new HashChangeEvent('hashchange'));


        expect(tab2.classList.contains("is-active")).to.be.true;
    });
});
