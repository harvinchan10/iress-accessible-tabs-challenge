import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs.component';

interface AppProps { }

function App({ }: AppProps) {
  const mockData = [
    {
      title: "Tab 1",
      children: <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad hic vero veniam, porro delectus. Voluptas rem laudantium nam voluptates deserunt numquam, officiis vitae, ut aspernatur iste delectus ipsa. Officiis!</>
    },

    {
      title: "Tab 2",
      children: <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad hic vero veniam, porro delectus. Voluptas rem laudantium nam voluptates deserunt numquam, officiis vitae, ut aspernatur iste delectus ipsa. Officiis!</>
    },

    {
      title: "Tab 3",
      children: <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad hic vero veniam, porro delectus. Voluptas rem laudantium nam voluptates deserunt numquam, officiis vitae, ut aspernatur iste delectus ipsa. Officiis!</>
    }
  ]
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <Tabs items={mockData} />
      </div>
    </div>
  );
}

export default App;
