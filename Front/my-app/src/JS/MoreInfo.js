import {Background} from './Background'
import { useParams } from 'react-router-dom';
import projects from '../JSON/projects.json'
import { useNavigate } from 'react-router-dom';
import '../Css/MoreInfo.css'

export function ProjectMoreInfo() {
    const navigate = useNavigate();

    const { id } = useParams();
    var projectName = "";
    var projectDescription = "";
    
    for (const project of projects) {
        if(project.id == id) {
            projectName = project.name;
            projectDescription = project.description;
            break;
        }
    }

    const OnClickHome = () => {
        navigate('/');
    }

    return (
        <div>
            <Background />

            <div className='container'>

                <h1 className='title'>{projectName}</h1>

                <div className='description-container'>
                    <p className='description'>{projectDescription}</p>
                </div>

                <button className='home-button' onClick={OnClickHome}>Home</button>
            
            </div>
        </div>
    )
}