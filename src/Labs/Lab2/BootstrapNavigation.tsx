import { Button, Card, Nav } from "react-bootstrap";

export default function BootstrapNavigation() {
    return (
        <div>
            <div id="wd-css-navigation-with-tabs">
                <h2>Tabs</h2>
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link href="#/Labs/Lab2/Active">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#/Labs/Lab2/Link1">Link 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#/Labs/Lab2/Link2">Link 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#/Labs/Lab2/Disabled" disabled>Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <br/>
            <div id="wd-css-navigating-with-cards">
                <h2>Cards</h2>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="images/frog.jpg"/>
                    <Card.Body>
                        <Card.Title>Frog in a Car</Card.Title>
                        <Card.Text>
                            Driving a red car is a frog's dream. Beep or bust!
                        </Card.Text>
                        <Button variant="primary">Boldly Go</Button>
                    </Card.Body>
                </Card>
                
            </div>
        </div>
    )
}