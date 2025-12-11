import { Route, Routes } from "react-router-dom";
import Homepage from "../home/Homepage";
import { Photography } from "../pages/Photography";
import MakupArtistes from "../pages/MakeupArtistes";
import EventPlanning from "../pages/EventPlanning";

const ScreenPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/find-photographers" element={<Photography />} />
      <Route path="/find-makeup-artistes" element={<MakupArtistes />} />
      <Route path="/find-event-planners" element={<EventPlanning />} />
    </Routes>
  );
};

export default ScreenPage;
