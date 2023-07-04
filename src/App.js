import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles/fontawesome.min.css";
import "./styles/fontawesome.min.css";
import "./App.css";
import Home from "./Pages/Home";
import Blog from "./components/Blog";
import Error404 from "./components/Error404";
import ServicePage from "./Pages/ServicePage";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import TestimonialPage from "./Pages/TestimonialPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
