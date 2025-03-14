import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Modules() {
    const { cid } = useParams();
    const modules= db.modules;

    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-modules">
                { modules.filter((module: any) => module.course === cid)
                    .map((module: any) => (
                        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3"/> { module.name } <ModuleControlButtons/>
                            </div>
                            { module.lessons && (
                                <ListGroup className="rounded-0" id="wd-lessons">
                                    { module.lessons.map((lesson : any) => (
                                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3"/> { lesson.name } <LessonControlButtons/>
                                        </ListGroup.Item>                                   ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    ))}
            </ListGroup>
        </div>

        
        // <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
        // <div className="wd-title p-3 ps-2 bg-secondary">
        //     <BsGripVertical className="me-2 fs-3"/> Week 1 <ModuleControlButtons/></div>
        // <ListGroup className="wd-lessons rounded-0">
        //     <ListGroup.Item className="wd-lesson p-3 ps-1">
        //     <BsGripVertical className="me-2 fs-3"/> LEARNING OBJECTIVES <LessonControlButtons/>
        //     </ListGroup.Item>
        //     <ListGroup.Item className="wd-lesson p-3 ps-1">
        //         <BsGripVertical className="me-2 fs-3"/> Introduction to the course <LessonControlButtons/>
        //     </ListGroup.Item>
        //     <ListGroup.Item className="wd-lesson p-3 ps-1">
        //         <BsGripVertical className="me-2 fs-3"/> Learn what is Web Development <LessonControlButtons/>
        //     </ListGroup.Item>
        // </ListGroup>
        // </ListGroup.Item>
        // <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
        // <div className="wd-title p-3 ps-2 bg-secondary"> 
        //     <BsGripVertical className="me-2 fs-3"/> Week 2 <ModuleControlButtons/></div>
        // <ListGroup className="wd-lessons rounded-0">
        //     <ListGroup.Item className="wd-lesson p-3 ps-1">
        //         <BsGripVertical className="me-2 fs-3"/> LESSON 1 <LessonControlButtons/>
        //         </ListGroup.Item>
        //     <ListGroup.Item className="wd-lesson p-3 ps-1">
        //         <BsGripVertical className="me-2 fs-3"/> LESSON 2 <LessonControlButtons/>
        //     </ListGroup.Item>
        // <div>
        //     <ModulesControls/>
        //     <button>Collapse All</button>&nbsp;
        //     <button>View Progress</button>&nbsp;
        //     <select id="wd-select-publish-all">
        //         <option value="PUBLISHA">Publish All</option>
        //     </select>&nbsp;
        //     <button>+ Module</button>
        //     <ul id="wd-modules">
        //         <li className="wd-module">
        //             <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
        //             <ul className="wd-lessons">
        //                 <li className="wd-lesson">
        //                     <span className="wd-title">LEARNING OBJECTIVES</span>
        //                     <ul className="wd-content">
        //                         <li className="wd-content-item">Introduction to the course</li>
        //                         <li className="wd-content-item">Learn what is Web Development</li>
        //                     </ul>
        //                 </li>
        //                 <li className="wd-lesson">
        //                     <span className="wd-title">READING</span>
        //                     <ul className="wd-content">
        //                         <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
        //                         <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
        //                     </ul>
        //                 </li>
        //                 <li className="wd-lesson">
        //                     <span className="wd-title">SLIDES</span>
        //                     <ul className="wd-content">
        //                         <li className="wd-content-item">Introduction to Web Development</li>
        //                         <li className="wd-content-item">Creating an HTTP server with Node.js</li>
        //                         <li className="wd-content-item">Creating a React Application</li>
        //                     </ul>
        //                 </li>
        //             </ul>
        //         </li>
        //         <li className="wd-module">
        //             <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
        //             <ul className="wd-lessons">
        //                 <li className="wd-lesson">
        //                     <span className="wd-title">LEARNING OBJECTIVES</span>
        //                     <ul className="wd-content">
        //                         <li className="wd-content-item">Learn how to creating user interfaces with HTML</li>
        //                         <li className="wd-content-item">Deploy the assignment to Netlify</li>
        //                     </ul>
        //                 </li>
        //                 <li className="wd-lesson">
        //                     <span className="wd-title">SLIDES</span>
        //                     <ul className="wd-content">
        //                         <li className="wd-content-item">Introduction to HTML and the DOM</li>
        //                         <li className="wd-content-item>">Formatting Web content with Headings and</li>
        //                         <li className="wd-content-item">Formatting content with Lists</li>
        //                     </ul>
        //                 </li>
        //             </ul>
        //         </li>
        //         <li className="wd-module">
        //             <div className="wd-title">Week 3</div>
        //         </li>
        //     </ul>
        // </div>
    )
}