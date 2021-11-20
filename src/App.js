import { useMediaQuery } from 'react-responsive'

function App() {
  const w2100MQ = useMediaQuery({ maxWidth: 2100 })

  return (
    <div className="App">
      <header className="App-header">
        <p>w2100MQ screen: {JSON.stringify(w2100MQ)}</p>
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
