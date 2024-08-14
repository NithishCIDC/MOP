import React from "react";
import logo from "../../assets/logo.png";
import { navigationLinks } from "../../constant/Constant";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const isActive = (path: string) => {
    return window.location.pathname.includes(path) ? "nav-link-active text-decoration-none" : "nav-link";
  };

  return (
    <div className="vh-100 d-flex flex-column">
      <div className="p-3">
        <img src={logo} alt="" className="img-fluid" width={170} />
      </div>

      <div className="fw-semibold d-flex flex-column gap-3 text-nowrap ps-4 mt-2">
        {navigationLinks.slice(0, 12).map((link) => (
          <div key={link.path} className="d-flex align-items-center">
            <Link to={link.path} className={`${isActive(link.path)} d-flex align-items-center`}>
              <link.icon className="me-2 " />
              {link.label}
            </Link>
          </div>
        ))}
      </div>
      <div className="ps-4 mt-auto mb-5 fw-semibold">
        {navigationLinks.slice(12).map((link) => (
          <Link to={link.path} key={link.path} className={`${isActive(link.path)} d-flex align-items-center`}>
            <link.icon className="me-2 " />
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
