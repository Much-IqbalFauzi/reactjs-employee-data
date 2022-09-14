import './App.css';
import MainContext from './components/MainContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Data</h1>
      </header>
      <div className="container">
        <MainContext />
      </div>
    </div>
  );
}

export default App;
