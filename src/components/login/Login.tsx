import { Button, Col, Container, NavDropdown, Row } from "react-bootstrap";
import logo from "../../assets/logo.png";
import LoginForm from "./LoginForm";
import { aboutUsItems, individualItems, providerItems } from "../../constant/Constant";

const Login: React.FC = () => {
  return (
    <div className="vh-100 d-flex align-items-center">
      <header className="d-flex align-items-center justify-content-between fixed-top">
        <div className="d-flex align-items-center gap-5 fw-bold fs-5">
          <img src={logo} alt="" width={150} className="img-fluid m-3" />
          <NavDropdown title="For Individuals">
            {individualItems.map((item) => (
              <NavDropdown.Item key={item.eventKey} eventKey={item.eventKey} className="fw-semibold">
                {item.label}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown title="For Providers">
            {providerItems.map((item) => (
              <NavDropdown.Item key={item.eventKey} eventKey={item.eventKey} className="fw-semibold">
                {item.label}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown title="About us">
            {aboutUsItems.map((item) => (
              <NavDropdown.Item key={item.eventKey} eventKey={item.eventKey} className="fw-semibold">
                {item.label}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </div>
        <div className="me-3">
          <Button className="rounded-5 me-3 px-4 fw-semibold" variant="outline-primary">
            Login
          </Button>
          <Button className="rounded-5 px-4 fw-semibold">Sign Up</Button>
        </div>
      </header>
      <Container>
        <Row>
          <Col className="d-flex align-items-center justify-content-center border-end border-2 border-dark">
            <div>
              <div className="display-3 fw-medium">Welcome Back</div>
            </div>
          </Col>
          <Col className="d-flex justify-content-center ps-5">
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
