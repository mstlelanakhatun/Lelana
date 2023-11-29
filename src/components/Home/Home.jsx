import Lottie from "react-lottie";
import reader from "../../assets/working.json";
import { useContext, useEffect } from "react";
import { ProviderContext } from "../Provider";
import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { AiOutlineCloudDownload } from "react-icons/ai";
import Resume from '../../assets/Mst. Lelana Khatun.pdf'
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TEXTS = [' Web Developer', ' MERN Stack Developer', ' Front-End Developer', ' React Developer'];

const Home = () => {
    const lottieAnimation = {
        loop: true,
        autoplay: true,
        animationData: reader,
    };

    useEffect(() => {
        AOS.init();
    }, [])


    const { theme } = useContext(ProviderContext)

    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3500,
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
            <div data-aos="fade-up" data-aos-duration="1000" className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                <div className='max-w-xl mb-6 lg:mt-8'>
                    <div>
                        <p className={`text-xl md:text-2xl mb-3 font-semibold ${theme === "light" ? 'text-gray-700' : ''}`}> <Typewriter
                    words={["Hello, it's me"]}
                    // loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={150}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /> </p> 
                    </div>
                    <h2 style={{ fontFamily: 'cursive' }} className={`max-w-lg mb-3 text-2xl md:text-3xl font-semibold tracking-tight sm:text-4xl sm:leading-none italic uppercase ${theme === "light" ? 'text-gray-700' : ''}`}>
                        Mst. Lelana Khatun
                    </h2>
                    <h1 className={`flex gap-3 text-2xl md:text-3xl font-semibold tracking-tight  mb-3 sm:text-4xl ${theme === "light" ? 'text-gray-700' : ''}`}>I am a <TextTransition className="text-blue-400" springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition></h1>
                    <p className={`text-base md:text-lg  ${theme === "light" ? 'text-gray-700' : ''}`}>
                        Welcome to my portfolio!. As a Developer, my objective is to apply my knowledge and skills in web development to contribute to the creation of visually appealing and user-friendly websites.
                    </p>
                </div>
                <div className='flex flex-col items-center md:flex-row'>
                        <div className='inline-flex items-center w-full h-full'>
                            <a href={Resume} download className='flex items-center gap-2 button button-primary'>Download Resume <AiOutlineCloudDownload className='h-8 w-8 text-gray-50' /></a>
                        </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='relative lg:w-1/2 '>
                <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                    <Lottie options={lottieAnimation} />
                </div>
            </div>
        </div>
    );
};

export default Home;