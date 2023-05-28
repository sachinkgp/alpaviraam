import Home from "./screens/Home";
import Navbar from "./screens/Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Ourteam from "./screens/Ourteam";
import Aboutus from "./screens/Aboutus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/contactus" element={<Contactus />} /> */}
          <Route path="/ourteam" element={<Ourteam />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
