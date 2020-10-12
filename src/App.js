import React from 'react';
import './components/Contact.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Dianne Rice" avatar="https://randomuser.me/api/portraits/women/18.jpg" online={true} />
      <Contact name="Marilyn Sanders" avatar="https://randomuser.me/api/portraits/women/74.jpg" online={false} />
      <Contact name="Debra Ross" avatar="https://randomuser.me/api/portraits/women/11.jpg" online={true} />
    </div>
  );
};

export default App;
