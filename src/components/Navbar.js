import { Link } from "react-router-dom";
import { useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaRegUser } from "react-icons/fa"


const Navbar = () => {
    const menuRef = useRef()
    const showMenu = () => {
        menuRef.current.classList.toggle("hidden")
    }

    return ( 
        <>
            <nav className='md:py-6 py-4 bg-yellow-500'>
                <div className="navbar md:flex  justify-around items-center md:mx-8 mx-4" >
                    <div className='flex items-center justify-between'>
                        <Link to='/' className='md:text-2xl text-xl font-semibold uppercase'>
                            <span className="font-extralight lowercase md:text-3xl text-2xl">
                                Afrikaan
                            </span> Restaurant
                        </Link>
                        <button onClick={showMenu} className="md:hidden">
                            <i className="text-xl fa fa-bars"></i> 
                            {/* <i className="fa fa-times"></i> */}
                        </button>
                    </div>

                    <div ref={menuRef} className="md:flex hidden ">
                        <ul className="md:flex items-center md:text-lg font-medium">
                            <li className='md:mx-6 mx-2 md:my-0 my-2 hover:text-white duration-500'>
                                <Link to='/menu'>Menu</Link>
                            </li>
                            <li className='md:mx-6 mx-2 md:my-0 my-2 hover:text-white duration-500'>
                                <Link to='/about'>About</Link>
                            </li>
                            <li className='md:mx-6 mx-2 md:my-0 my-2 hover:text-white duration-500'>
                                <Link to='/contact'>Contact</Link>
                            </li>
                            <li className='md:mx-6 mx-2 md:my-0 my-2 hover:text-white duration-500 md:text-2xl '>
                                <Link to=''>
                                    <AiOutlineShoppingCart />
                                </Link>
                            </li>
                            <li className='md:mx-3 mx-1 md:my-0 my-2 text-white hover:text-gray-900 duration-300 p-3 border-2 hover:border-gray-900 rounded-full'>
                                <Link to='/signin' className="md:text-xl text-lg">
                                    <FaRegUser />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
        </>
     );
}
 
export default Navbar;