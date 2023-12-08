import Navigationbar from "./Components/Navigationbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FooterComponent from "./Components/FooterComponent";
import { useState } from "react";
import { dynamicRoutes } from "./Components/Routing";
function App() {
  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navigationbar />
        <Routes>
          {dynamicRoutes.map((route, idx) => {
            return (
              <Route
                key={idx}
                path={route.path}
                element={<route.component login={login} setLogin={setLogin} />}
              ></Route>
            );
          })}
          {/* <Route path="/" element={<h1>Hello!!</h1>}></Route>
          <Route
            path="/login"
            element={<Login login={login} setLogin={setLogin} />}
          ></Route>
          <Route
            path="/signup"
            element={<Signup login={login} setLogin={setLogin} />}
          ></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route> */}
        </Routes>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
