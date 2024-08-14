import React, { useState } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import Condition from "./Condition";
import ProviderPost from "./ProviderPost";

export const EducationLibrary: React.FC = () => {
  const [comp, setComp] = useState("A");
  return (
    <div>
      <Row className="d-flex flex-nowrap m-0 p-0">
        <Col className="d-flex m-0 me-3">
          <Sidebar />
        </Col>
        <Col className="d-flex flex-fill p-5 Bg-color justify-content-center">
          <div className="m-5 shadow-lg p-5 rounded-4 bg-white">
            <div>
              <h1>Education Library</h1>
              <p>Learn more about different conditions and treatment options</p>
            </div>
            <div className="fw-semibold">
              <Nav variant="underline" defaultActiveKey="/Condition">
                <Nav.Item>
                  <Nav.Link onClick={() => setComp("A")} className={`${comp !== "A" && "text-dark"}`}>
                    Condition
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onClick={() => setComp("B")} className={`${comp !== "B" && "text-dark"}`}>
                    Provider Post
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div>
              {comp === "A" && <Condition />} {comp === "B" && <ProviderPost />}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
