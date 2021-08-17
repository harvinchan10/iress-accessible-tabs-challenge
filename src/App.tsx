import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs.component';

interface AppProps { }

function App({ }: AppProps) {
  const mockData = {
    title: "Main Tab",
    anchoring: {prefix: "main-tab-"},
    items: [
      {
        id: "tab-1",
        title: "Tab 1",
        children: <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad hic vero veniam, porro delectus. Voluptas rem laudantium nam voluptates deserunt numquam, officiis vitae, ut aspernatur iste delectus ipsa. Officiis!</>
      },

      {
        id: "tab-2",
        title: "Tab 2",
        children: <>Lorem ipsum dolor sit amet consectetur adipisicing elit. </>
      },

      {
        id: "tab-3",
        title: "Tab 3",
        children: <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad hic vero veniam, porro delectus. Voluptas rem laudantium nam voluptates deserunt numquam, officiis vitae, ut aspernatur iste delectus ipsa.</>
      }
    ]
  }
  const mockData2 = {
    title: "Main Tab 2",
    anchoring: {prefix: "main-tab2-"},
    items: [
      {
        id: "tab2-1",
        title: "Tab 1",
        children: <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad hic vero veniam, porro delectus. Voluptas rem laudantium nam voluptates deserunt numquam, officiis vitae, ut aspernatur iste delectus ipsa. Officiis!</>
      },

      {
        id: "tab2-2",
        title: "Tab 2",
        children: <>Lorem ipsum dolor sit amet consectetur adipisicing elit. </>
      },

      {
        id: "tab2-3",
        title: "Tab 3",
        children: <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad hic vero veniam, porro delectus. Voluptas rem laudantium nam voluptates deserunt numquam, officiis vitae, ut aspernatur iste delectus ipsa.</>
      }
    ]
  }


  return (
    <div className="page-wrapper">
      <div className="page-content">
        <Tabs {...mockData} />
        <br/>
        <Tabs {...mockData2} />
      </div>
    </div>
  );
}

export default App;
