import { Card, Col, Button } from 'react-bootstrap'

const GridItems = (props) => {
    return (
        <>
            <Col md="4">
                <Card>
                    <Card.Img variant='top' src={props.image} />
                    <Card.Body>
                        <Card.Title>
                            {props.title}
                        </Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat, exercitationem recusandae veniam obcaecati asperiores itaque error odio tempora commodi numquam placeat quia dolorem blanditiis soluta inventore at culpa. Perferendis.
                        </Card.Text>
                        <Button variant="warning">More Info</Button>
                    </Card.Body>

                </Card>
            </Col>
        </>
    );
}

export default GridItems;