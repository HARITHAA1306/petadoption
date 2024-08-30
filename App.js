import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Adoption from "./Adoption";
import Header from "./common/Header";
import Adoption1 from "./Adoption1";
import Sign from "./Sign";
import Aboutus from "./Aboutus";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/adopt" element={<Adoption />} />
          <Route path="/header" element={<Header />} />
          <Route path="/adopt1" element={<Adoption1 />} />
          <Route path="/signin" element={<Sign/>}/>
          <Route path="/about" element={<Aboutus/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
