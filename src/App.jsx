import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.scss";
import MonitorPage from "./pages/monitor";

const App = () => {
    return (
      <>
          <BrowserRouter>
                <Routes>
                    <Route path="/monitor" element={<MonitorPage />} />
                </Routes>
          </BrowserRouter>
      </>
    );
}

export default App;