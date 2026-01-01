import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<p>იტვირთება...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
