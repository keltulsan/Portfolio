import Card from 'react-bootstrap/Card';
import '../Css/Card.css';

export function ProjectCard({projectName, imageSrc, content, moreInfoLink, githubLink}) {
  return (
    <Card className='cardStyle' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body className='cardBody'>
        <Card.Title>{projectName}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
      </Card.Body>
      <Card.Body className='cardBody'>
        <Card.Link className="cardLink" href={moreInfoLink}>More Info</Card.Link>
        <Card.Link className="cardLink" target="_blank" href={githubLink}>Github</Card.Link>
      </Card.Body >
    </Card>
  );
}