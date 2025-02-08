import { Button, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1><hr/>
            <h2 id="wd-dashboard-published">Published Courses (12)</h2><hr/>
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1111/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/english.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">ENGW1111 Intro to English</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">English Writer</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/5610/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/systems.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">ARTG5610 Design Systems</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Design Consultant</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/5610/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/info.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">ARTG2242 Info Design</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Information Scientist</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/2500/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/fundies.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS2500 Fundies</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Computer Scientist</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/3000/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/algo.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS3000 Algorithms</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Algorithmist</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/4321/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/ai.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">CS4321 Advanced AI</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">AI Researcher</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/9900/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/magic.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">MAGIC9900 Magic Tricks</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Magician</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1122/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/colorcomp.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">ARTG1122 Color & Comp</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Color Compositionist</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "270px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1100/Home" className="wd-dashboard-course-link
                                                                            text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/film.jpg" width="100%" height={160}/>
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title">MSCR1100 Film 101</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">Filmmaker</Card.Text>
                                    <Button variant="primary">Go</Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row>   
            </div>
        </div>
    );
}