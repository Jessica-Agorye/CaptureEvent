import { Route, Routes } from "react-router-dom";
import Homepage from "../home/Homepage";
import { Photography } from "../pages/Photography";
import MakupArtistes from "../pages/MakeupArtistes";

const ScreenPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/find-photographers" element={<Photography />} />
      <Route path="/find-makeup-artistes" element={<MakupArtistes />} />
    </Routes>
  );
};

export default ScreenPage;
