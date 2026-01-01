import logo from '../logo.svg';
import '../Css/App.css';
import '../Css/Background.css'
import { Background } from './Backgound';
import { ProjectCard } from './Cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <Background />

        <h1 className='title'>Portfolio</h1>
        <div className='cardDisplay'>
          <ProjectCard 
          projectName="hello" 
          imageSrc={logo}
          content="hello 2"
          moreInfoLink=""
          githubLink=""
          />
           <ProjectCard 
          projectName="hello" 
          imageSrc={logo}
          content="hello 2"
          moreInfoLink=""
          githubLink=""
          /> <ProjectCard 
          projectName="hello" 
          imageSrc={logo}
          content="hello 2"
          moreInfoLink=""
          githubLink=""
          />
          <ProjectCard 
          projectName="hello" 
          imageSrc={logo}
          content="hello 2"
          moreInfoLink=""
          githubLink=""
          />
          
        </div>
      </header>
    </div>
  );
}

export default App;
