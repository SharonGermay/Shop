import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Menu(props) {
  return (
    <div className="menu-navbar">
      <Navbar bg="dark" variant="dark">
        <Container>
            <Link to={"/"}>Home</Link>
            <Link to={"/items"}>Items</Link>
            <Link to={"/cart"}>Cart</Link>
        </Container>
      </Navbar>
    </div>
  );
}