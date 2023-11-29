import { createBrowserRouter, } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/Home";
import Error from "./Error";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/AboutMe',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/Skills',
                element: <Skills></Skills>
            },
            {
                path: '/Projects',
                element: <Projects></Projects>
            },
            {
                path: '/Contact',
                element: <Contact></Contact>
            },
        ]
    },
  ]);