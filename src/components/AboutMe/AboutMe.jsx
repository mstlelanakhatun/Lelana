import { useContext, useEffect } from 'react';
import img from '../../assets/me.jpg'
import { ProviderContext } from '../Provider';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {

    const { theme } = useContext(ProviderContext)

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className='AboutMe' id='AboutMe'> 
            <section className={`body-font ${theme === "light" ? 'text-gray-700' : ''}`}>
                <h3 data-aos="fade-up" className='text-center text-4xl'><Typewriter
                    words={['About Me']}
                    // loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={200}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /> </h3>

                <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded-lg" alt="hero" src={img} />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <p className="mb-8 leading-relaxed">Hello, my name is Mst. Lelana Khatun. Recently I have joined MSC program  in CSE in
Bangladesh University of Professionals (BUP). I have completed my graduation from Bangladesh Army International University of Science and Technology (BAIUST). I did my internship on Django from Jalalabad Gas T & D System Ltd. Mendibagh, Sylhet. I contributed to one of their projects there.Based on my previous history in diversified fields, I believe I will be a significant team player as I can learn very quickly.

I also have a conference paper on blockchain which was published in IEEE named <a  href="https://ieeexplore.ieee.org/abstract/document/9689814" target="_blank">Securing Ride-Sharing Service Using IPFS and Hyperledger Based on Private Blockchain</a>.Besides in my undergraduate study, I have participated in various programming contests like the BCC day programming contest, NGPC 2019, and so on. Also I have taken part in multiple clubs and societies throughout the years. For example I am former general secretary of BAIUST Computer Club. 
. I recently finished the complete web development course with jhankar mahbub. This course provided me with comprehensive knowledge and practical experience, enabling me to tackle real-world projects with confidence. Now I have expertise in HTML, CSS, Tailwind, Bootstrap, ES6, react and Firebase authentication. I am also comfortable working with JavaScript, MongoDB, Express JS, node JS, and jwt. I use tools like vsCode, git, Figma, Netlify,  and Vercel to make my development process smother. I enjoy web development because I am confident that I have the skills and knowledge to be successful in a web development role. I am eager to learn more about the position.</p>

                        <div className="flex gap-5 lg:gap-[178px] border-t border-gray-400 py-2">
                            <span className="text-gray-500">Name</span>
                            <span className="ml-auto">Mst. Lelana Khatun</span>
                        </div>
                        <div className="flex gap-5 lg:gap-[173px] border-t border-gray-400 py-2">
                            <span className="text-gray-500">Phone</span>
                            <span className="ml-auto">+8801764455783</span>
                        </div>
                        <div className="flex gap-3 lg:gap-[181px] border-t border-b mb-6 border-gray-400 py-2">
                            <span className="text-gray-500">Email</span>
                            <span className="ml-auto">mstlelanakhatun@gmail.com</span>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;