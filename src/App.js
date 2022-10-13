import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import Result from './components/Result'

function App() {
  return (
    <div className="App">
      <h1>Multi-vise</h1>
      <SearchBar/>
      <Result/>
    </div>
  );
}

export default App;
