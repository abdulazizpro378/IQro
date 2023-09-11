import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./layouts/base-layout";
import { Home } from "./pages";
import { NotFound } from "./components/notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
