import { Routes, Route } from 'react-router-dom';
import '../Css/App.css'
import { MoreInfo } from './MoreInfo';
import { Home } from './Home';

function App() {
  return (
    <div className="App">
       <header className="App-header">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-info" element={<MoreInfo />} />
      </Routes>

      </header>
    </div>
  );
}

export default App;
