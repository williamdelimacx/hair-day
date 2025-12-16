import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { PageComponents } from "./pages/page-components";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/components" element={<PageComponents />} />
      </Routes>
    </BrowserRouter>
  );
}
