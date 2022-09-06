import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/pages/About/About";
import ContactUsPage from "./components/pages/ContactUs/ContactUs";
import HomePage from "./components/pages/Home/Home";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import ProjectsPage from "./components/pages/Projects/Projects";

export default function Routing() {

    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="About" element={<AboutPage />} />
                <Route path="Projects" element={<ProjectsPage />} />
                <Route path="ContactUs" element={<ContactUsPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>

    )
}