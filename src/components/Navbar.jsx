import React, { useContext } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ProviderContext } from "./Provider";


export default function Nav() {
    const [openNav, setOpenNav] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const { Toggle, theme } = useContext(ProviderContext)
    const handleToggle = (e) => {
        Toggle(e)
    }


    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`p-1 font-normal ${theme === "light" ? '' : 'text-white'}`}
            >
               
            </Typography>
            <Typography
                as="li"
                variant="small" 
                color="blue-gray"
                className={`p-1 font-normal ${theme === "light" ? '' : 'text-white'}`}
            >
               
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`p-1 font-normal ${theme === "light" ? '' : 'text-white'}`}
            >
               
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={`p-1 font-normal ${theme === "light" ? '' : 'text-white'}`}
            >
                
            </Typography>
        </ul>
    );

    return (
        <>
            <Navbar className="sticky bg-slate-100 inset-0 z-10 h-max max-w-full py-2 px-4 lg:px-8 lg:py-4 my-6 rounded-lg">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link to="/">
                        <span style={{ fontFamily: 'cursive' }} className="self-center  text-[20px] md:text-3xl font-semibold whitespace-nowrap text-blue-600 uppercase italic">Mst. Lelana Khatun</span>
                    </Link>
                    <div className="flex items-center  gap-4">
                        <div className="mr-4 hidden  lg:block">{navList}</div>
                        <button className="btn btn-square btn-ghost me-8 md:me-11">
                            <label className="swap swap-rotate">
                                <input
                                    type="checkbox"
                                    onChange={handleToggle}
                                    checked={theme === "light" ? false : true}
                                />
                                <svg className="swap-on fill-current w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                                <svg className="swap-off fill-current w-10 h-10 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                            </label>
                        </button>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className={`h-6 w-6 ${theme === "light" ? '' : 'text-white'}`}
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-6 w-6 ${theme === "light" ? '' : 'text-white'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                </MobileNav>
            </Navbar>
        </>
    );
}