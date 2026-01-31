import '../Css/Home.css';
import '../Css/Background.css'
import { Background } from './Backgound';
import { ProjectCard } from './Cards';
import projects from '../JSON/projects.json'
import description from '../JSON/description.json'

export function Home() {
    return (  
    <div className="background-wrapper">
        
        <Background />

        <h1 className='title'>Portfolio</h1>

        <div className='description-container'>
        <p className='description'>{description.description}</p>
        </div>

        <div className='cardDisplay'>

        {projects.map(project => (
            <ProjectCard
            key={project.id}
            id={project.id}
            imageSrc={project.image}
            projectName={project.name}
            content={project.shortDesiption}
            githubLink={project.githubLink}
            />
        ))}

        </div>
    </div>
    )
}
