import { useState, useEffect } from "react";
import {
  MdOutlineMenu,
  MdOutlineMenuOpen,
  MdOutlineShoppingCart,
} from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";
import { LogOut } from "../../store/Reducers/auth/actions";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.webp";
import UserCard from "../cards/UserCard";
import { Modal } from "../../store/Reducers/interactions/actions";

const styles = {
  menuButtons:
    "cursor-pointer border-b-2 border-transparent hover:border-blue-900 hover:animate-pulse",
};

const Header = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const { modal } = useSelector((state) => state.interactions);
  // menu operation
  const [menuState, setMenuState] = useState(false);
  const [browserWidth, setBrowserWidth] = useState(document.body.offsetWidth);

  useEffect(() => {
    function resize() {
      setBrowserWidth(document.body.offsetWidth);
    }
    window.onresize = resize;
  });
  useEffect(() => {
    browserWidth <= 768 ? setMenuState(false) : setMenuState(true);
  }, [browserWidth]);

  const headerMenu = (nav) => {
    Navigate(nav);
    browserWidth <= 768 ? setMenuState(false) : setMenuState(true);
  };

  const modalToggle=()=>{
    dispatch(Modal(!modal))
  }
  // jsx
  return (
    <div className="z-50 drop-shadow mt-0 fixed w-full xl:w-[1280px]">
      {/* Hamburger menu */}
      <div
        className="md:hidden absolute top-0 left-0 z-50"
        onClick={() => setMenuState(!menuState)}
      >
        {menuState ? (
          <div className="flex items-center justify-between w-[100vw]  px-6 bg-white">
            <MdOutlineMenuOpen className="text-blue-dark text-5xl pb-2 pt-4 box-content" />
          </div>
        ) : (
          <div className="flex items-center justify-between w-[100vw] px-6 bg-white">
            <MdOutlineMenu className="text-blue-dark text-5xl pb-2 pt-4 box-content" />
            <p className="text-3xl text-blue-dark pt-3">Unique Color Lab</p>
          </div>
        )}
      </div>
      {/* desktop menu */}
      <div
        className={`flex md:h-auto md:justify-between p-4 pt-1 pb-2 md:items-center md:flex-row absolute md:relative capitalize text-xl flex-col h-screen w-screen md:w-auto justify-center gap-8 text-center items-center border-b border-black border-opacity-10 bg-white 
    ${
      menuState
        ? "left-0 mt-0 md:transition-none transition-all"
        : "-left-full mt-16 md:transition-none transition-all"
    }`}
      >
        {/* logo */}
        <img
          onClick={() => headerMenu("/")}
          className="object-contain cursor-pointer h-16"
          src={Logo}
          alt="Brand Logo"
        />
        {/* header buttons */}
        <ul className="flex justify-around gap-4 flex-col md:flex-row ">
          <li onClick={() => headerMenu("/")} className={styles.menuButtons}>
            home
          </li>
          <li
            onClick={() => headerMenu("/packages")}
            className={styles.menuButtons}
          >
            package
          </li>
          <li
            onClick={() => headerMenu("/contact")}
            className={styles.menuButtons}
          >
            contact
          </li>
          <li
            onClick={() => headerMenu("/about")}
            className={styles.menuButtons}
          >
            about
          </li>
        </ul>
        {/* user section */}
        <div className="flex gap-4 flex-col md:flex-row items-center">
          <img
            onClick={() => isLoggedIn?modalToggle(): headerMenu("/login")}
            className="cursor-pointer rounded-full h-14 w-14 md:h-12 md:w-12 border-2 border-black"
            src="https://img.icons8.com/laces/64/000000/user.png"
            alt="user image icon"
          />
          <p onClick={() => isLoggedIn?modalToggle():headerMenu("/login")} className="cursor-pointer">
            {isLoggedIn? `Hi, ${user?.firstname}`: "Hi, Guest"}
          </p>
          <span
            onClick={() => {
              headerMenu("/cart");
            }}
            className="cursor-pointer flex items-center gap-1"
          >
            <MdOutlineShoppingCart /> {`${0}`}
          </span>
        </div>
      </div>
     {isLoggedIn && <UserCard style="absolute top-20 right-16 p-8 rounded-md w-[320px]"/>}
    </div>
  );
};

export default Header;
