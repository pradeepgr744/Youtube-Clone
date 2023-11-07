import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Header = () => {

    let [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const [arraydata, setarraydata] = useState([])

    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;


    async function handlechange(e) {
        setSearchTerm(e.target.value)
        arraydata.splice(0,arraydata.length - 1)

        const options = {
            method: 'POST',
            url: 'https://youtube-keyword-suggestions-search.p.rapidapi.com/search',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'c3c20ddc5emsh8c50708d49f52b2p18bc5djsnb99e777a63d6',
                'X-RapidAPI-Host': 'youtube-keyword-suggestions-search.p.rapidapi.com'
            },
            data: {
                keyword: `${e.target.value}`,
                gl: 'uk',
                hl: 'en'
            }
        };

        try {
            const response = await axios.request(options);

            setarraydata(response.data.main.map(item => 
            <li><p>{item}</p></li>))

        } catch (error) {
            console.error(error);
        }


    }




    const onhandleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    };







    return (
        <header className="shadow sticky z-50 top-0 h-[6vh] mb-[10vh] ">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 pt-2 pb-0 mb-0">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="" className="flex items-center">
                        <img src="/vite.svg" className='p-0 animate-bounce w-[10vw] h-[10vh]' />
                    </Link>
                    <form onSubmit={onhandleSubmit}>
                        <div className='flex text-center shadow hover:shadow-xl rounded-3xl overflow-hidden'>
                            <input
                                type='text'
                                className='outline-none w-[30vw] py-1 px-3'
                                placeholder='Search'
                                value={searchTerm}
                                onChange={(e) => { handlechange(e) }}
                            />
                            <button
                                type='submit'
                                className='bg-gray-700 outline-none px-4'><img src='search.svg' /></button>
                        </div>
                    </form>
                   

                    <button

                        className='flex flex-col h-12 w-12 outline-none justify-center items-center group text-3xl cursor-pointer md:hidden'
                        onClick={() => setOpen(!open)}
                    >
                        <div
                            className={`${genericHamburgerLine} ${open
                                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                                }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${open ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                                }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${open
                                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                                : "opacity-50 group-hover:opacity-100"
                                }`}
                        />

                    </button>



                    <div
                        className={`md:flex md:items-center md:pb-0 pb-12 pt-3 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 pr-9 transition-all delay-0 duration-300 ease-in-out ${open ? 'top-20 ' : 'top-[-490px]'} justify-between items-center w-full lg:flex lg:w-auto lg:order-11`}
                        id="mobile-menu-2"
                    >
                        <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                            <li>
                                <NavLink
                                    to=""
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`

                                    }
                                    onClick={() => setOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Trending"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                    onClick={() => setOpen(false)}

                                >
                                    Trending
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
                                    onClick={() => setOpen(false)}

                                >
                                    Contact
                                </NavLink>
                            </li>


                        </ul>
                    </div>
              
                </div>
            </nav>
            <div className='pl-5 justify-center overflow-visible rounded-b-3xl bg-gray-500 w-[35vw] ml-[28vw] pt-0 '>
                <ul className='text-left'>
                    {arraydata}
                </ul>
            </div>

        </header>
    );
}

export default Header