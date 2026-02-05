import { Routes, Route } from 'react-router-dom';
import '../Css/App.css'
import { ProjectMoreInfo } from './MoreInfo';
import { Home } from './Home';

function App() {
  return (
    <div className="App">
       <header className="App-header">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectMoreInfo />} />
      </Routes>

      </header>
    </div>
  );
}

export default App;
