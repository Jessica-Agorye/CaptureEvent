import { BrowserRouter } from "react-router-dom";

import ScreenPage from "./screen/ScreenPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ScreenPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
