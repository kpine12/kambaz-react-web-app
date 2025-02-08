import { Col, FormControl, FormSelect, InputGroup } from "react-bootstrap"
import { IoCalendarOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <FormControl id="wd-username"
                placeholder="alice"
                className="mb-2"/><br />
            <FormControl id="wd-password"
                placeholder="123" type="password"
                className="mb-2"/><br />
            <FormControl id="wd-firstname"
                placeholder="Alice" className="mb-2"/><br />
            <FormControl id="wd-lastname"
                placeholder="Wonderland" className="mb-2"/><br />
            <InputGroup className="mb-2">
                <Col sm={9}>
                    <FormControl placeholder="mm/dd/yyyy"/>
                </Col>
                <InputGroup.Text><IoCalendarOutline className="position-relative me-2" style={{ bottom: "1px" }}/></InputGroup.Text>
            </InputGroup><br/>
            <FormControl id="wd-email"
                placeholder="alice@wonderland" type="email"
                className="mb-2"/><br />
            <FormSelect>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </FormSelect><br/>
            <Link id="wd-signin-btn"
                to="/Kambaz/Account/Signin"
                className="btn btn-danger w-100 mb-2">
                Signout </Link><br />
        </div>
    )
}