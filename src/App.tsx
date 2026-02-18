import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Detail from "./pages/Detail";
import CV from "./pages/CV";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/:type/:id" element={<Detail />} />
      <Route path="/cv" element={<CV />} />
    </Routes>
  );
}

export default App;
