import logo from './logo.svg';
import './App.css';
import { Blog } from './components/Blog';
import {Homepage } from './components/Home';

function App() {
  return (
    <div className="App">
      <h1>Blog Post </h1>
      {/* <Blog /> */}
      <Homepage />
    </div>
  );
}

export default App;
