import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
export default function TOC() {
  const { pathname } = useLocation();
  return (
   <Nav variant="pills">
     <Nav.Item>
       <Nav.Link href="#/Labs">Labs</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link as={Link} to="/Labs/Lab1" id="wd-a1"
        active={pathname.includes("Lab1")}> Lab1 </Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link as={Link} to="/Labs/Lab2" id="wd-a2"
        active={pathname.includes("Lab2")}> Lab2 </Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link as={Link} to="/Labs/Lab3" id="wd-a3"
        active={pathname.includes("Lab3")}> Lab3 </Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link as={Link} to="/Kambaz" id="wd-a3"> Kambaz </Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="https://github.com/kpine12" target="_blank">My GitHub</Nav.Link>
     </Nav.Item>
   </Nav>
);}
