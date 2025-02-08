import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import { ListGroup } from "react-bootstrap";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { LuNotebookPen } from "react-icons/lu";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentControls/><br />
            <ListGroup className="rounded-0" id="wd-assignment-list">
                <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3"/> ASSIGNMENTS <ModuleControlButtons/></div>
                <ListGroup className="wd-lessons rounded-0">
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3"/>
                        <LuNotebookPen className="me-2 fs-3"/>
                        <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link">
                            A1
                        </a><LessonControlButtons/>
                        <p>Multiple Modules | Not available until May 6 at 12:00am |<br/>
                        Due May 13 at 11:59 | 100pts</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3"/>
                        <LuNotebookPen className="me-2 fs-3"/>
                        <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link">
                            A2
                        </a><LessonControlButtons/>
                        <p>Multiple Modules | Not available until May 6 at 12:00am |<br/>
                        Due May 13 at 11:59 | 100pts</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3"/>
                        <LuNotebookPen className="me-2 fs-3"/>
                        <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link">
                            A3
                        </a><LessonControlButtons/>
                        <p>Multiple Modules | Not available until May 6 at 12:00am |<br/>
                        Due May 13 at 11:59 | 100pts</p>
                    </ListGroup.Item>
                </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

{/* <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button></h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link">
                        A1 - ENV - HMTL 
                    </a><br/>
                    Multiple Modules | <b>Not available until</b> May 6 at 12:00am |<br/>
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                    </li>
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link">
                        A2 - CSS + BOOTSTRAP
                    </a><br/>
                    Multiple Modules | <b>Not available until</b> May 13 at 12:00am |<br/>
                    <b>Due</b> May 20 at 11:59pm | 100 pts
                    </li>
                <li className="wd-assignment-list-item">
                    <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link">
                        A3 - JAVASCRIPT + REACT
                    </a> <br/>
                    Multiple Modules | <b>Not available until</b> May 20 at 12:00am |<br/>
                    <b>Due</b> May 27 at 11:59pm | 100 pts
                    </li>
            </ul>
        </div> */}