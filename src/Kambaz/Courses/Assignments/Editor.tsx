import { Button, Card, Col, Form, FormControl, FormGroup, FormLabel, FormSelect, InputGroup, Row } from "react-bootstrap";
import "./../../styles.css";
import { IoCalendarOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editors">
            <h3>Assignment Name</h3>
            <FormGroup className="mb-3" controlId="wd-email">
                    <FormControl placeholder="A1"/>
            </FormGroup>
            <Card>
                <Card.Body>
                    The assignment is available online <br/><br/>Submit a link to the landing page of 
                    your Web application running on Netlify. <br/><br/>The landing page should
                    include the following: <br/><br/>
                    • Your full name and section <br/>
                    • Links to each ofthe lab assignments <br/>
                    • Link to the Kanbaz application <br/>
                    • Links to all relevantsource code repositories <br/><br/>The Kanbaz application should include a link to
                    navigate back to the landing page.
                </Card.Body>
            </Card><br/>
            <Form.Group as={Row} className="mb-3" controlId="points">
                    <Form.Label column sm={2}>
                        Points
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control placeholder="100"/>
                    </Col>
            </Form.Group><br/>
            <Form.Group as={Row} className="mb-3" controlId="assignment-group">
                <Form.Label column sm={2}>
                    Assignment Group
                </Form.Label>
                <Col sm={10}>
                    <FormSelect>
                            <option selected>ASSIGNMENTS</option>
                        </FormSelect>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="display-grade">
                <Form.Label column sm={2}>
                    Display Grade as
                </Form.Label>
                <Col sm={10}>
                    <FormSelect>
                            <option selected>Percentage</option>
                            <option>Letter</option>
                            <option>Fraction</option>
                        </FormSelect>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="submission-type">
                <Form.Label column sm={2}>
                    Submission Type
                </Form.Label>
                <Card>
                    <Card.Body>
                        <Col sm={10}>
                            <FormSelect>
                                    <option selected>Online</option>
                                    <option>Traditional</option>
                            </FormSelect>
                        </Col>
                        <input type="checkbox" name="check-submission" id="wd-chkbox-text"/>
                        <label htmlFor="wd-chkbox-comedy">Text Entry</label><br/>

                        <input type="checkbox" name="check-submission" id="wd-chkbox-url"/>
                        <label htmlFor="wd-chkbox-drama">Website URL</label><br/>

                        <input type="checkbox" name="check-submission" id="wd-chkbox-media"/>
                        <label htmlFor="wd-chkbox-scifi">Media Recordings</label><br/>

                        <input type="checkbox" name="check-submission" id="wd-chkbox-annotate"/>
                        <label htmlFor="wd-chkbox-fantasy">Student Annotation</label><br/>

                        <input type="checkbox" name="check-submission" id="wd-chkbox-upload"/>
                        <label htmlFor="wd-chkbox-fantasy">File Uploads</label>
                    </Card.Body>
                </Card>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="assign">
                <Form.Label column sm={2}>
                    Assign
                </Form.Label>
                <Card>
                    <Card.Body>
                        Assign To
                        <Col sm={10}>
                            <FormControl/>
                        </Col>
                        Due
                        <Form>
                            <InputGroup className="mb-3">
                                <Col sm={8}>
                                    <Form.Control placeholder="May 13, 2024, 11:59"/>
                                </Col>
                                <InputGroup.Text><IoCalendarOutline className="position-relative me-2" style={{ bottom: "1px" }}/></InputGroup.Text>
                            </InputGroup>
                         </Form>
                         <div className="nowrap">
                            Available from
                         <Form>
                            <InputGroup className="mb-3">
                                <Col sm={3}>
                                    <Form.Control placeholder="May 6, 2024, 11:59"/>
                                </Col>
                                <InputGroup.Text><IoCalendarOutline className="position-relative me-2" style={{ bottom: "1px" }}/></InputGroup.Text>
                            </InputGroup>
                         </Form>
                         Until
                         <Form>
                            <InputGroup className="mb-3">
                                <Col sm={3}>
                                    <Form.Control placeholder="May 6, 2024, 11:59"/>
                                </Col>
                                <InputGroup.Text><IoCalendarOutline className="position-relative me-2" style={{ bottom: "1px" }}/></InputGroup.Text>
                            </InputGroup>
                         </Form>
                         </div>
                    </Card.Body>
                </Card>
            </Form.Group>
            <div id="wd-assignment-creation-buttons">
                <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                    Save
                </Button>
                <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                    Cancel
                </Button>
            </div>
            {/* <label htmlFor="wd-name">
                <h3>
                    Assignment Name
                </h3>
            </label>
            <input id="wd-name" value="A1 - ENV + HTML"/><br/><br/>
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of 
                your Web application running on Netlify. The landing page should
                include the following: Your full name and section Links to each of
                the lab assignments Link to the Kanbaz application Links to all relevant
                source code repositories The Kanbaz application should include a link to
                navigate back to the landing page.
            </textarea>
            <br/>
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100}/>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="PERCENTAGE">Percentage</option>
                            <option value="LETTER">Letter</option>
                            <option value="FRACTION">Fraction</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="ONLINE">Online</option>
                            <option value="TRADITIONAL">Traditional</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                            <label>Online Entry Options</label><br/>

                            <input type="checkbox" name="check-type" id="wd-text-entry"/>
                            <label htmlFor="wd-text-entry">Text Entry</label><br/>
                            
                            <input type="checkbox" name="check-type" id="wd-website-url"/>
                            <label htmlFor="wd-website-url">Website URL</label><br/>
                            
                            <input type="checkbox" name="check-type" id="wd-media-recordings"/>
                            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                            <input type="checkbox" name="check-type" id="wd-student-annotation"/>
                            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                            <input type="checkbox" name="check-type" id="wd-file-upload"/>
                            <label htmlFor="wd-file-upload">File Uploads</label><br/>
                        </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign Assign to</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input placeholder="Everyone" id="wd-assign-to"/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="date" value="2024-05-13" id="wd-due-date"/>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="date" value="2024-05-06" id="wd-available-until"/>
                    </td>
                    <td>
                        <input type="date" value="2024-05-20" id="wd-available-until"/>
                    </td>
                </tr>
            </table>
            <hr/>
            <button>Cancel</button> <button>Save</button> */}
        </div>
    );
}