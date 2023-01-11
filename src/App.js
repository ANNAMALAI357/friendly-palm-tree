import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AppHeader from "./project/common/AppHeader";
import Sideabar from "./project/common/Sideabar";
import NormalTheme from "./NormalTheme";
import HomePage from "./project/pages/HomePage";
import Page1 from "./project/pages/Page1";
import Page2 from "./project/pages/Page2";
import Page3 from "./project/pages/Page3";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={NormalTheme}>

        <Routes>
          <Route path="" element={<AppHeader />}>
            <Route path="" element={<Sideabar />} >
              <Route path="" element={<HomePage/>}/>
              <Route path="/page-1" element={<Page1/>}/>
              <Route path="/page-2" element={<Page2/>}/>
              <Route path="/page-3" element={<Page3/>}/>
            </Route>
          </Route>
        </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
