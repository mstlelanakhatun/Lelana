import { useContext, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { ProviderContext } from '../Provider';
import js from "../../assets/js.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import Firebase from "../../assets/firebase.png"
import MongoDB from "../../assets/mongodb.png"
import Tailwind from "../../assets/Tailwind.png"
import Bootstrap from "../../assets/b.png"
import NodeJs from "../../assets/nodeJs.png"
import ExpressJSLogo from "../../assets/ex.svg"
import React from "../../assets/react.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

    const { theme } = useContext(ProviderContext)

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className={`body-font ${theme === "light" ? 'text-gray-700' : ''}`}>
            <h3 data-aos="fade-up" className='text-center text-4xl'><Typewriter
                words={['My Skills']}
                // loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={200}
                deleteSpeed={50}
                delaySpeed={1000}
            /> </h3>

            <p data-aos="fade-up" data-aos-duration="1000" className="my-8 px-8 md:px-48 text-center">A quick overview of my main technical skill sets and the technologies I use is given below. Want to find out more about my experience?
                Check out my online resume and projects.
            </p>


            <section className={`${theme === "light" ? 'text-gray-700' : ''} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center mx-auto md:px-0 px-5`}>

                <div data-aos="fade-up" data-aos-duration="1000" className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="h-20 mb-3 " src={MongoDB} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">MongoDB</h5>

                    <p className="mb-3 font-normal ">I am comfortable working with MongoDB, a popular NoSQL database solution. I have experience in designing and implementing MongoDB database schemas, performing CRUD operations, and utilizing its powerful querying capabilities. With MongoDB, I can efficiently store and retrieve data, ensuring the scalability and performance of web and mobile applications.</p>

                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className={`h-20 mb-3 ${theme === "light" ? "" : "text-white"}`} src={ExpressJSLogo} alt="Express JS"
                    />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">Express JS</h5>
                    <p className="mb-3 font-normal ">
                        I am comfortable with Express.js, a framework for web development using Node.js. Express.js simplifies the process of creating server-side applications, making it effortless to build dynamic and responsive websites. I feel confident and comfortable utilizing Express.js to craft efficient and scalable web solutions.
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="h-20 mb-3 " src={React} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">React</h5>

                    <p className="mb-3 font-normal ">I am skilled in React, a popular JavaScript library for building user interfaces. React simplifies the process of creating dynamic and interactive web applications, allowing me to create visually appealing and engaging UIs effortlessly. With my expertise in React, I can confidently develop efficient and responsive web solutions using this powerful library.</p>

                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="h-20 mb-3 " src={NodeJs} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">Node Js</h5>

                    <p className="mb-3 font-normal ">I am familiar with Node.js, a powerful JavaScript runtime environment. I have experience in building server-side applications and APIs using Node.js. I am comfortable working with Node.js frameworks like Express.js to handle routing and middleware, making it easier to create web applications.</p>

                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="h-20 mb-3 " src={html} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">HTML</h5>

                    <p className="mb-3 font-normal ">I am an HTML expert, skilled in creating structured and accessible web pages. I have a deep understanding of HTML tags, elements, and attributes, allowing me to build well-organized and user-friendly websites. My expertise in HTML enables me to effectively communicate information and optimize the user experience.</p>

                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="h-20 mb-3 " src={css} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">CSS</h5>

                    <p className="mb-3 font-normal ">I'm really good at CSS! I can make web pages look beautiful and responsive. I know all about CSS selectors, properties, and layout techniques to create user-friendly and visually appealing websites. With my CSS expertise, I add creativity and style to enhance the overall user experience.</p>

                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="h-20 mb-3 " src={js} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">Vanilla JavaScript</h5>

                    <p className="mb-3 font-normal ">As a junior developer, I have a good understanding of Vanilla JavaScript and how it works. I'm eager to learn more and gain practical experience by working on real projects. I'm excited to contribute my skills and continue growing as a web developer using Vanilla JavaScript.</p>

                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="h-20 mb-3 " src={Firebase} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">Firebase</h5>

                    <p className="mb-3 font-normal ">I have proficiency in Firebase authentication and hosting. With Firebase authentication, I can easily implement user authentication and authorization features in web applications. Additionally, I am experienced in using Firebase hosting to deploy and serve web applications, providing a reliable and scalable hosting solution.</p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="h-20 mb-3 " src={Tailwind} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">Tailwind CSS</h5>

                    <p className="mb-3 font-normal ">I am experienced in Tailwind CSS, a utility-first CSS framework. Tailwind CSS simplifies the process of styling web applications, providing a wide range of pre-built classes that can be easily applied. With my expertise in Tailwind CSS, I can effortlessly create visually appealing and responsive designs for web projects.</p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="h-20 mb-3 " src={Bootstrap} alt="" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight">Bootstrap</h5>

                    <p className="mb-3 font-normal ">
                        I have expertise in Bootstrap, a popular CSS framework for building responsive and mobile-first websites. Bootstrap simplifies the process of designing web pages with its extensive library of pre-built components and responsive grid system. With my proficiency in Bootstrap, I can effortlessly create visually appealing and user-friendly interfaces for web applications.</p>
                </div>

            </section> 
        </section>
    );
};

export default Skills;