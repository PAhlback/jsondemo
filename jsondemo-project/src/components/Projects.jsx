import MyProjects from '../assets/data.json';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Projects() {
    
    return (
        <section>
            <h2>Made by: {MyProjects.user}</h2>

            <Card>
                <ListGroup variant="flush">
                    {
                        MyProjects.projects.map((proj) => {
                            return(
                                <ListGroup.Item key={proj.id}>
                                    <article>
                                        <h3>{proj.name}</h3>
                                        <p>{proj.description}</p>
                                    </article>
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </Card>

            <h2>Work</h2>
            {
                MyProjects.arbete.map((work) => {
                    return(
                        <article key={work.id}>
                            <h3>{work.name}</h3>
                        </article>
                    )
                })
            }
        </section>
    )
}