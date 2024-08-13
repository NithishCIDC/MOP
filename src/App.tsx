import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/not-found/NotFound";
import { PrivateRouter } from "./components/private-Router/PrivateRouter";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRouter />}>
            <Route path="/Home" element={<AppRouter Home={<Home />} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const AppRouter: React.FC<React.ComponentType> = (comp) => {
  return (
    <Row>
      <Col>
        <Sidebar />
      </Col>
      <Col>{comp}</Col>
    </Row>
  );
};

export default App;
