import React, {component} from "react";
import {BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Planning from "./pages/Planning";
import ChargingSlot from "./pages/ChargingSlot";
import Choose from "./pages/Choose";
import GetStartedPage from "./pages/GetStartedPage";
import { useEffect } from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetStartedPage />}/>
         
          <Route path="Choose" element={<Choose />} />
          <Route path="ChargingSlot" element={<ChargingSlot />} />
          <Route path="Planning" element={<Planning />} />
        
      </Routes>
    </BrowserRouter>
  )

}
export default App;
