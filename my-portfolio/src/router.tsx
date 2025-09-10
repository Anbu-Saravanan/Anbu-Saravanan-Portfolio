import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


export default createBrowserRouter([
  { path: "/", element: <App />, children: [
    { index: true, element: <Home /> },
    { path: "projects", element: <Projects /> },
    { path: "skills", element: <Skills /> },
    { path: "experience", element: <Experience /> },
    { path: "resume", element: <Resume /> },
    { path: "contact", element: <Contact /> },
    { path: "*", element: <NotFound /> }
  ] }
]);
