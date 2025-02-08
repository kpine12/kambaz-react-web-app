import { Button, Col, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { Form } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";

export default function AssignmentControls() {
    return (
        <div id="wd-assignment-controls" className="text-nowrap d-flex justify-content-between align-items-center">
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Text><IoIosSearch className="position-relative me-2" style={{ bottom: "1px" }}/></InputGroup.Text>
                    <Col sm={8}>
                        <Form.Control placeholder="Search..."/>
                    </Col>
                </InputGroup>
            </Form>
            <div id="wd-assignment-controls-btns">
                <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </Button>
                <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </Button>
            </div>
        </div>
    )
}