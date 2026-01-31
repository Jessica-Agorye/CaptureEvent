import { Route, Routes } from "react-router-dom";
import Homepage from "../home/Homepage";
import { Photography } from "../pages/Photography";
import MakupArtistes from "../pages/MakeupArtistes";
import EventPlanning from "../pages/EventPlanning";
import EventPlannerDetails from "../pages/EventPlannerDetails";
import { BookNowPage } from "../pages/BookNowPage";
import CaterersPage from "../pages/CaterersPage";
import Decorator from "../pages/DecoratorsPage";
const ScreenPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/find-photographers" element={<Photography />} />
      <Route path="/find-makeup-artistes" element={<MakupArtistes />} />
      <Route path="/find-event-planners" element={<EventPlanning />} />
      <Route path="/find-caterers" element={<CaterersPage />} />
      <Route path="/find-decorators" element={<Decorator />} />
      <Route
        path="/find-event-planners/:id"
        element={<EventPlannerDetails />}
      />

      <Route path="/book-now/:id" element={<BookNowPage />} />
    </Routes>
  );
};

export default ScreenPage;
