import logo from '../logo.svg';
import '../Css/App.css';
import '../Css/Background.css'
import './backgound'
import { ProjectCard } from './Cards';

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <div class="gradient-background">
            <div class="gradient-sphere sphere-1"></div>
            <div class="gradient-sphere sphere-2"></div>
            <div class="gradient-sphere sphere-3"></div>
            <div class="glow"></div>
            <div class="grid-overlay"></div>
            <div class="noise-overlay"></div>
            <div class="particles-container" id="particles-container"></div>
          </div>

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
