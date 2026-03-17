import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Detail from "./pages/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/:type/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
