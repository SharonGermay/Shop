import { Nav, Navbar, Container } from "react-bootstrap";
export default function Menu(props) {
  return (
    <div className="menu-navbar">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/items">Items</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
