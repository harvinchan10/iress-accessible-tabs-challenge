# Accessible Tabs Code Challenge
Tab component that is compliant with the [WAI ARIA specification](https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel)

### _Features_
- Keyboard navigation
    - supports `Arrow Left`, `Arrow Right`, `Home` and `End` keys
- State preservation - Tabs will preserve their state (Active tab) even after page refresh or navigation (back/forward)
- Ability to link to a certain `Tab`
    - eg. http://localhost:8080#main-tab-tab-3 should open Tab 3 on page load.
    - `main-tab-` is the anchor key for a tab group
    - `tab-3` is the tab menu ID
____
## Development
### Pre-requisites:
- Node v14 or later
&nbsp;
### Running locally
1. `npm install`
2. `npm run start`
3. Open http://localhost:8080
 
### Running tests (Chrome)
1. if you haven't done so, `npm install`
2. `npm run test` 

    2a. `npm test -- --watch` to run in interactive watch mode
### Running tests (Chromium, Firefox, Webkit)
1. if you haven't done so, `npm install`
2. `npm run test-all` 

