import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./layout";
import HomePage from "./pages/home";
import VideosPage from "./pages/videos";
import VideoShowPage from "./pages/videos/show";
import SidebarLayout from "./layout/sidebar/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route element={<SidebarLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/videos" element={<VideosPage />} />
          </Route>
          <Route path="/videos/:id" element={<VideoShowPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
