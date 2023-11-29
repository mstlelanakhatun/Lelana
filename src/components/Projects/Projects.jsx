import { useContext, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { ProviderContext } from '../Provider';
import img from '../../assets/bistro.png'
import img2 from '../../assets/sport-learn.png'
import img3 from '../../assets/toytrek.png'
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    const { theme } = useContext(ProviderContext)

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className={`body-font ${theme === "light" ? 'text-gray-700' : ''}`}>
            <h3 data-aos="fade-up" className='text-center text-4xl my-16 '><Typewriter
                words={['My Projects']}
                // loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={200}
                deleteSpeed={50}
                delaySpeed={1000}
            /> </h3>


            <div className={`${theme === "light" ? 'text-gray-700' : ''} grid grid-cols-1 md:grid-cols-3  gap-5 justify-center mx-auto md:px-0 px-5 mt-10`}>

                <div data-aos="fade-up" data-aos-duration="1000" className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                    <img
                        src={img}
                        className='object-cover w-full'
                    />

                    <div className='bg-black px-6 py-4 bg-opacity-90 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
                        <h5 className="mb-2 text-2xl md:text-4xl text-blue-500 font-semibold tracking-tight">Cumilla Plate</h5>
                        <p className="mb-3 font-normal text-[13px] md:text-[16px]">
                            <p>Cumilla Plate - Chef Recipe Hunter Website</p>
                            <p>● Implemented user authentication and registration functionality using Firebase.</p>
                            <p>● private routing on the client side, allowing access to the chef's detailed information.</p>
                            <p>● Implemented a redirect mechanism, sending users to the login page if they attempt to access the chef
                                details page without logging in.</p>
                            <p className="">
                                <span className='font-semibold'>Technologies:</span> React-router-dom, React(Vite), ExpressJS, Vercel, Firebase, React-lazy-load, React
                                toastify, Tailwind CSS, React Font, NodeJS.
                            </p>
                        </p>
                        <div className="grid grid-cols-3 gap-4 mt-5">
                            <Link target="_blank" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" to={'https://assignment-10-76a6f.web.app/'}>Live</Link>

                            <Link target="_blank" className=" flex items-center gap-2  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" to={'https://github.com/mstlelanakhatun/CumillaPlate_ClientSite.git'}><FaGithub />Client</Link>

                            <Link target="_blank" className=" flex items-center gap-2  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" to={'https://github.com/mstlelanakhatun/CumillaPlate_ServerSite.git'}><FaGithub />Server</Link>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                    <img
                        src={img3}
                        className='object-cover w-full'
                    />

                    <div className='bg-black px-6 py-4 bg-opacity-90 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
                        <h5 className="mb-2 text-2xl md:text-4xl text-blue-500 font-semibold tracking-tight">ToyQuest</h5>
                        <p className="mb-3 font-normal text-[13px] md:text-[16px]">
                            <p>● Users can add, update, and delete their own toys.</p>
                            <p>● The shop by category section includes tabs with sub-categories of toys for easy navigation.</p>
                            <p>● Single toy details page is a private route. Non-logged in users prompted to log in and redirected to login
                                page when clicking on view details button</p>
                            <p className="">
                                <span className='font-semibold'>Technologies:</span> React-router-dom, MongoDB, ExpressJS, Vercel, Firebase, React AOS, React Swiper,
                                Tailwind CSS, React Font, NodeJS.
                            </p>
                        </p>
                        <div className="grid grid-cols-3 gap-4 mt-5">
                            <Link target="_blank" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" to={'https://assignment-11-8c577.web.app/'}>Live</Link>

                            <Link target="_blank" className=" flex items-center gap-2  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" to={'https://github.com/mstlelanakhatun/ToyQuest_ClientSide.git'}><FaGithub />Client</Link>

                            <Link target="_blank" className=" flex items-center gap-2  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" to={'https://github.com/mstlelanakhatun/ToyQuest_ServerSite.git'}><FaGithub />Server</Link>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
                    <img
                        src={img2}
                        className='object-cover w-full'
                    />

                    <div className='bg-black px-6 py-4 bg-opacity-90 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
                        <h5 className="mb-2 text-2xl md:text-4xl text-blue-500 font-semibold tracking-tight">Aperture Academy</h5>
                        <p className="mb-3 font-normal text-[13px] md:text-[16px]">
                            <p> ● Aperture Academy is a full-stack MERN website for sports academies.</p>
                            <p>● Includes registration and login system, instructor dashboard, student dashboard and admin dashboard.</p>
                            <p>● Website uses token-based authentication, Stripe, react-query, Axios and has dark/light theme toggle.</p>
                            <p className="">
                                <span className='font-semibold'>Technologies:</span> React(Vite), React-router-dom, MongoDB, ExpressJS, NodeJS, JWT, Stripe, Firebase,
                                React sweetalert2, Tailwind CSS, React Font, Vercel, Tanstack query, Axios.
                            </p>
                        </p>
                        <div className="grid grid-cols-3 gap-4 mt-5">
                            <Link target="_blank" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" to={'https://aperture-academy-ef2b7.web.app/'}>Live</Link>

                            <Link target="_blank" className=" flex items-center gap-2  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" to={'https://github.com/mstlelanakhatun/ApertureAcademy_ClientSite.git'}><FaGithub />Client</Link>

                            <Link target="_blank" className=" flex items-center gap-2  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" to={'https://github.com/mstlelanakhatun/ApertureAcademy_ServerSite.git'}><FaGithub />Server</Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Projects;