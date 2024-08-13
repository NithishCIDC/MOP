import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/not-found/NotFound";
import { PrivateLogin, PrivateRouter } from "./components/private-Router/PrivateRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateLogin />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<PrivateRouter />}>
            <Route path="/Home" element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
