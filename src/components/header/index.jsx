import {useState, useEffect} from "react";
import {MdOutlineMenu, MdOutlineMenuOpen, MdOutlineShoppingCart} from "react-icons/md"
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.webp"

const styles = {
    menuButtons:"cursor-pointer border-b-2 border-transparent hover:border-blue-900 hover:animate-pulse"
}


const Header = () => {
    const Navigate = useNavigate()

    // menu operation
    const [menuState,setMenuState] = useState(false)
    const [browserWidth, setBrowserWidth] = useState(document.body.offsetWidth)

    useEffect(() => {
        function resize() {
          setBrowserWidth(document.body.offsetWidth);
        }
        window.onresize = resize;
      });
    useEffect(()=>{
        browserWidth<=768?setMenuState(false):setMenuState(true)
    },[browserWidth])
    // jsx
    return <div className='z-50 drop-shadow mt-0 fixed w-full xl:w-[1280px]'>
{/* Hamburger menu */}
    <div className="md:hidden absolute top-6 left-6 scale-150 z-50"
    onClick={()=>setMenuState(!menuState)}>
        {menuState?<MdOutlineMenuOpen/>:<MdOutlineMenu/>}
    </div>
{/* desktop menu */}
    <div className={`flex md:h-auto md:justify-between p-4 pt-1 pb-2 md:items-center md:flex-row absolute md:relative capitalize text-xl flex-col h-screen w-screen md:w-auto justify-center gap-8 text-center items-center border-b border-black border-opacity-10 bg-white 
    ${menuState?"left-0 mt-0 md:transition-none transition-all":"-left-full mt-16 md:transition-none transition-all"}`}>
{/* logo */}
    <img onClick={()=>Navigate("/")} className="object-contain cursor-pointer h-16" src={Logo} alt="Brand Logo" />
{/* header buttons */}
    <ul className="flex justify-around gap-4 flex-col md:flex-row ">
        <li onClick={()=>Navigate("/")} className={styles.menuButtons}>home</li>
        <li onClick={()=>Navigate("/packages")} className={styles.menuButtons}>package</li>
        <li onClick={()=>Navigate("/contact")} className={styles.menuButtons}>contact</li>
        <li onClick={()=>Navigate("/about")} className={styles.menuButtons}>about</li>
    </ul>
{/* user section */}
    <div className="flex gap-4 flex-col md:flex-row items-center">
        <img className="cursor-pointer rounded-full h-14 w-14 md:h-12 md:w-12 border-2 border-black" src="https://img.icons8.com/laces/64/000000/experimental-user-laces.png" alt="user image icon" />
        <p className="cursor-pointer">user</p>
        <span className="cursor-pointer flex items-center gap-1"><MdOutlineShoppingCart/> {`${0}`}</span>
    </div>
    </div>
    </div>
}

export default Header;
