import './App.css';
//import treeImage from '../public/fake/';
import treeImageTest from './fake\\220131-European-larch-trees-and-spruces-ew-512p-ec27db.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={treeImageTest} />
        <button>Like</button>
        <button>Follow</button>
        <button>Share</button>
      </header>
    </div>
  );
}

export default App;
