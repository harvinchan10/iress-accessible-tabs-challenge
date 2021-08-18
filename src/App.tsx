import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs.component';
import { mockData, mockData2 } from "src/components/Tabs/Tabs.mockData"

interface AppProps { }

function App({ }: AppProps) {



  return (
    <div className="page-wrapper">
      <div className="page-content">
        <Tabs {...mockData} />
        <br />
        <Tabs {...mockData2} />
      </div>
    </div>
  );
}

export default App;
