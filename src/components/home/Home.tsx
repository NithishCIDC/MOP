import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { Col, Row } from "react-bootstrap";

const Home: React.FC = () => {
  const user = JSON.parse(sessionStorage.getItem("user") || "");
  return (
    <div>
      <Row className="d-flex flex-nowrap m-0 p-0">
        <Col className="d-flex m-0 me-3">
          <Sidebar />
        </Col>
        <Col className="d-flex flex-fill">
          <div>
            <h2>Hi,{user.firstName}</h2>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
