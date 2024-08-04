import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="mx-auto min-w-[400px] max-w-[1312px] px-4 py-12">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:contactId" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
