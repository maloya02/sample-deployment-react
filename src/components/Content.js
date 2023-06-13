import { Container, Row, Col } from "react-bootstrap";
import GridItems from "./Griditems";
import items1 from './../images/1.png'
import items2 from './../images/2.png'
import items3 from './../images/3.png'
import items4 from './../images/4.png'
import items5 from './../images/5.png'


const Content = () => {
    return (
        <div className="bg-dark text-warning">
            <br /><br /><br />
            <Container>
                <h1 id="topanimelist">Top 5 Animes of the week:</h1>
                <br /><br />
                <Row className="g-5 justify-content-center">
                    <GridItems image={items1} title="鬼滅の刃" />
                    <GridItems image={items2} title="Anime2" />
                    <GridItems image={items3} title="Anime3" />
                    <GridItems image={items4} title="黒子のバスケ" />
                    <GridItems image={items5} title="Anime5" />
                </Row>
            </Container>
                <br /><br /><br /><br />

        </div>
    );
}

export default Content;