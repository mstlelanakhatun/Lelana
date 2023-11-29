import Nav from "./Navbar";
import Footer from "./Footer";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";


const Layout = () => {
    return (
        <div className="my-container">
            <Nav></Nav>
            <Home></Home>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Layout;