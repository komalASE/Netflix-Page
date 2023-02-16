import React from 'react';
import './App.css';
import Page from './components/Page';
import Sdata from './components/Sdata';

function App() {
  return (
    <div className="App">
      <h3>Watch Your Favorite Shows For Free</h3>
      <div className='main-container' >
        {Sdata.map((value, index) => (
            <Page
              image={value.imgsrc}
              sname={value.sname}
              title={value.title}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
