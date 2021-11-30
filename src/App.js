import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Conversor moedaA="Real" moedaB="Euro"></Conversor>
      </header>
    </div>
  );
}

export default App;
