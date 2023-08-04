import logo from './assets/logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from './lib/axios';

function App() {

  useEffect(() => {



    (async () => {
      try {
        const response = await axios.get('cars', {
          params: { model: 'corolla', limit: 50 }
        });
        console.log(response.data, 'DATATA');
      } catch (error) {
        console.error(error);
      }
    })()


  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
