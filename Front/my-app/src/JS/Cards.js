import Card from 'react-bootstrap/Card';
import '../Css/Card.css';

export function ProjectCard({id, projectName, imageSrc, content, githubLink}) {
  return (
    <Card className='cardStyle' style={{ width: '18rem' }}>
      <Card.Img className='cardImage' variant="top" src={`/ProjectsImage/` + imageSrc} />
      <Card.Body className='cardBody'>
        <Card.Title className='projectTitle'>{projectName}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
      </Card.Body>
      <Card.Body className='cardBody'>
        <Card.Link className="cardLink" href={`/project/` + id}>More Info</Card.Link>
        <Card.Link className="cardLink" target="_blank" href={githubLink}>Github</Card.Link>
      </Card.Body >
    </Card>
  );
}