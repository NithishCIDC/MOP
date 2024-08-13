import React from "react";
import logo from "../../assets/logo.png";
import { Nav } from "react-bootstrap";
import { navigationLinks } from "../../constant/Constant";

const Sidebar: React.FC = () => {
  return (
    <div className="vh-100 d-flex flex-column">
      <div className="p-3">
        <img src={logo} alt="" className="img-fluid" width={170} />
      </div>

      <div className="fw-semibold d-flex flex-column gap-3 text-nowrap ps-4 mt-2">
        <Nav activeKey="0">
          {navigationLinks.slice(0, 12).map((link) => (
            <Nav.Link eventKey={link.eventKey} key={link.eventKey} className="d-flex align-items-center gap-2 ">
              <link.icon />
              {link.label}
            </Nav.Link>
          ))}
        </Nav>
      </div>
      <div className="ps-4 mt-auto mb-5 fw-semibold">
        {navigationLinks.slice(12).map((link) => (
          <Nav.Link eventKey={link.eventKey} key={link.eventKey} className="d-flex align-items-center gap-2">
            <link.icon />
            {link.label}
          </Nav.Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
