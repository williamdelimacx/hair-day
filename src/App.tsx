import { BrowserRouter, Routes, Route } from "react-router";
import { PageComponents } from "./pages/page-components";
import { Home } from "./pages/home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/componentes" element={<PageComponents />} />
      </Routes>
    </BrowserRouter>
  );
}
