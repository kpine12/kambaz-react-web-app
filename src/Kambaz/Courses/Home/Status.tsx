import { Button } from "react-bootstrap";
import { BiImport } from "react-icons/bi";
import { FaCheckCircle, FaRegBell } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { ImStatsBars } from "react-icons/im";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { SlTarget } from "react-icons/sl";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" style={{ width: "350px" }}>
            <h2>Course Status</h2>
            <div className="d-flex">
                <div className="w-50 pe-1">
                    <Button variant="secondary" size="lg" className="w-100 text-nowrap">
                        <MdDoNotDisturbAlt className="me-2 fs-5"/>Unpublish</Button></div>
                <div className="w-50">
                    <Button variant="success" size="lg" className="w-100">
                        <FaCheckCircle className="me-2 fs-5"/>Publish</Button></div>
            </div>
            <br/>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <BiImport className="me-2 fs-5"/> Import Existing Content </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <LiaFileImportSolid className="me-2 fs-5"/> Import from Commons </Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <SlTarget className="me-2 fs-5"/> Choose Home Page</Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <ImStatsBars className="me-2 fs-5"/> View Course Stream</Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <GrAnnounce className="me-2 fs-5"/> New Announcements</Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <ImStatsBars className="me-2 fs-5"/> New Analytics</Button>
            <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
                <FaRegBell className="me-2 fs-5"/> View Course Notifcations</Button>
        </div>
    )
}

{/* <div id="wd-course-status">
<h2>Course Status</h2>
<button>Unpublish</button> <button>Publish</button><br/><br/>

<button>Import Existing Content</button><br/>
<button>Import from Commons</button><br/>
<button>Choose Home Page</button><br/>
<button>View Course Stream</button><br/>
<button>New Announcement</button><br/>
<button>New Analytics</button><br/>
<button>View Course Notifications</button>
</div> */}