import {useState, useEffect} from "react";
import {MdOutlineMenu,MdOutlineMenuOpen} from "react-icons/md"
import Logo from "../../assets/logo.webp"


const Header = () => {
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
    
    return <div className={`${menuState?" mt-0":" mt-16"}`}>
    <div className="md:hidden absolute top-6 left-6 scale-150 z-50"
    onClick={()=>setMenuState(!menuState)}>
        {menuState?<MdOutlineMenuOpen/>:<MdOutlineMenu/>}
    </div>

    <div className={`flex md:h-auto md:justify-between p-4 pt-1 pb-2 md:items-center md:flex-row absolute md:relative capitalize text-xl w-screen flex-col h-screen justify-center gap-8 text-center items-center border-b border-black border-opacity-10
    ${menuState?"left-0 mt-0 transition-all":"-left-full mt-16 transition-all"}`}>

    <img className="object-contain h-16" src={Logo} alt="Brand Logo" />

    <ul className="flex justify-around gap-4 flex-col md:flex-row ">
        <li className="hover:bg-black hover:text-yellow-50">home</li>
        <li>package</li>
        <li>contact</li>
        <li>about</li>
    </ul>

    <div className="flex gap-2 flex-col md:flex-row items-center">
        <img className="rounded-full h-16 w-16 md:h-12 md:w-12 border-2 border-black" src="https://img.icons8.com/laces/64/000000/experimental-user-laces.png" alt="user image icon" />
        <p>user</p>
        <p>cart</p>
    </div>

    </div>
    </div>
}

export default Header;
