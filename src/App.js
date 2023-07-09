import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import TopRated from "./routes/TopRated";
import Popular from "./routes/Popular";
import NowPlaying from "./routes/NowPlaying";
import Upcoming from "./routes/Upcoming";
import Content from "./components/Content";
import ScrollTop from "./components/ScrollTop";
import Welcome from "./components/Welcome";

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/welcome" element={<Welcome />} /> */}
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/nowplaying" element={<NowPlaying />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/content/:id" element={<Content />} />
        </Routes>
        <ScrollTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
