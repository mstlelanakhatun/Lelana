import { FaBalanceScale, FaBook, FaFacebook, FaGithub, FaImage, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className=" dark:bg-gray-900">
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
                <div className="sm:flex sm:items-center sm:justify-between mx-auto w-full max-w-screen-xl p-4">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">© 2023 <span style={{ fontFamily: 'cursive' }} className="uppercase italic">Mst. Lelana Khatun</span>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <Link to="https://www.facebook.com/mstlelanakhatun/" target="_blank" className="text-gray-500 hover:text-blue-500 dark:hover:text-white">
                            <FaFacebook className="h-6 w-6" />
                            <span className="sr-only">Facebook page</span>
                        </Link>

                        <Link target="_blank" to="https://www.instagram.com/mstlelanakhatun/" className="text-gray-500 hover:text-blue-500 dark:hover:text-white">
                            <FaInstagram className="h-6 w-6" />
                            <span className="sr-only">Instagram page</span>
                        </Link>

                        <Link target="_blank" to="https://github.com/mstlelanakhatun" className="text-gray-500 hover:text-blue-500 dark:hover:text-white">
                            <FaGithub className="h-6 w-6" />
                            <span className="sr-only">GitHub account</span>
                        </Link>

                        <Link target="_blank" to="https://www.linkedin.com/in/mstlelanakhatun/" className="text-gray-500 hover:text-blue-500 dark:hover:text-white">
                            <FaLinkedin className="h-6 w-6" />
                            <span className="sr-only">linkedin account</span>
                        </Link>

                        <Link target="_blank" to="https://ieeexplore.ieee.org/abstract/document/9689814" className="text-gray-500 hover:text-blue-500 dark:hover:text-white">
                            <FaBook className="h-6 w-6" />
                            <span className="sr-only">IEEE</span>
                        </Link>
                    </div>
                </div>
            </footer >
        </div >
    );
};

export default Footer;