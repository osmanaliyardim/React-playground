import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React Fundamentals"/>
        <Message name='Osman' nickname='Best Developer'/>
        <Greet name='Osman'/>
        <Greet name='Ali'/>
        <Welcome name='Veli'/>
        <Welcome name='Ahmet'/>
        <Hello/>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
