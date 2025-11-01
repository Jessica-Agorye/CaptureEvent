import { Route, Routes } from "react-router-dom";
import Homepage from "../home/Homepage";
import Photography from "../pages/Photography";

const ScreenPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/find-photographers" element={<Photography />} />
    </Routes>
  );
};

export default ScreenPage;
