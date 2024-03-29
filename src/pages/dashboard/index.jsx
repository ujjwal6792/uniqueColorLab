import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LogOut } from "../../store/Reducers/auth/actions";
import { IoMdLogOut, IoMdHelpCircleOutline,IoMdCard, IoMdContact } from "react-icons/io";
import PersonalDetails from "./pages/PersonalDetails";

const Dashboard = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { uid, user, isLoggedIn } = useSelector((state) => state.auth);
  const [selectedOption, setSelectedOption] = useState("Personal Details");

  const logOut = () => {
    dispatch(LogOut());
  };
  const selectOption = (e) => {
    setSelectedOption(e.target.innerText);
    e.target.classList.add("bg-blue-200");
    document.querySelectorAll(".cursor-pointer").forEach((element) => {
      if (element.innerText === e.target.innerText) {
        element.classList.add("bg-blue-200");
      } else {
        element.classList.remove("bg-blue-200");
      }
    });
  };

  return (
    <>
      {isLoggedIn === true ? (
        <div className="pt-20 grid grid-cols-12 text-blue-dark">
          <div className="flex flex-col gap-4 p-4 col-span-3 ">
            <section className="flex gap-4 items-center shadow-md p-2">
              {user?.img === undefined ? (
                <img
                  className="border rounded-full p-1 w-16"
                  src="https://img.icons8.com/laces/64/000000/user.png"
                  alt=""
                />
              ) : (
                <img src={user?.img} alt="" />
              )}

              <p className="text-2xl font-semibold">{`Hi, ${user?.firstname}`}</p>
            </section>
            <section className="flex flex-col gap-2 items-center shadow-md py-2">
              <p className="text-xl px-2 pb-2 border-b-2 w-full font-semibold">
                My Orders
              </p>
              <div className="text-xl px-2 pb-2 w-full font-semibold">
              <p className="grid grid-cols-9 items-center gap-8">
                  <IoMdContact className="text-2xl" /> <span className="col-span-8">Account Details</span>
                </p>
                <p
                  className={`pl-8 py-2 mt-2 text-sm cursor-pointer bg-blue-200`}
                  onClick={(e) => selectOption(e)}
                >
                  Personal Details
                </p>
                <p
                  className={`pl-8 py-2 text-sm cursor-pointer`}
                  onClick={(e) => selectOption(e)}
                >
                  Manage Addresses
                </p>
                <p
                  className={`pl-8 py-2 text-sm cursor-pointer`}
                  onClick={(e) => selectOption(e)}
                >
                  My Wishlist
                </p>
              </div>
              <div className="text-xl px-2 pb-2 w-full font-semibold">
              <p className="grid grid-cols-9 items-center gap-8">
                  <IoMdCard className="text-2xl" /> <span className="col-span-8">Payments</span>
                </p>
                <p
                  className={`pl-8 py-2 mt-2 text-sm cursor-pointer`}
                  onClick={(e) => selectOption(e)}
                >
                  Wallet
                </p>
                <p
                  className={`pl-8 py-2 text-sm cursor-pointer`}
                  onClick={(e) => selectOption(e)}
                >
                  Saved UPI
                </p>
                <p
                  className={`pl-8 py-2 text-sm cursor-pointer`}
                  onClick={(e) => selectOption(e)}
                >
                  Saved Cards
                </p>
              </div>
              <div className="text-xl px-2 pb-2 w-full font-semibold">
                <p className="grid grid-cols-9 items-center gap-8">
                  <IoMdHelpCircleOutline className="text-2xl" /> <span className="col-span-8">Help Center</span>
                </p>
                <p
                  className={`pl-8 py-2 mt-2 text-sm cursor-pointer`}
                  onClick={(e) => selectOption(e)}
                >
                  Help With Your Order
                </p>
                <p
                  className={`pl-8 py-2 text-sm cursor-pointer`}
                  onClick={(e) => selectOption(e)}
                >
                  Cancelation and refund
                </p>
                <p
                  className={`pl-8 py-2 text-sm cursor-pointer`}
                  onClick={(e) => selectOption(e)}
                >
                  Payment issues
                </p>
                <p
                  className={`pl-8 py-2 text-sm cursor-pointer`}
                  onClick={(e) => selectOption(e)}
                >
                  Know More About Our Products
                </p>
                <p
                  className={`pl-8 py-2 text-sm cursor-pointer`}
                  onClick={(e) => selectOption(e)}
                >
                  Help With Other Issues
                </p>
              </div>
            </section>

            <section onClick={() => logOut()} className="grid grid-cols-9 items-center gap-8 shadow-md p-2 bg-blue-dark cursor-pointer hover:bg-red-600 hover:transition-colors">
              <IoMdLogOut className="text-white text-xl" />
              <p className=" text-xl text-white font-semibold text-opacity-95">
                Logout
              </p>
            </section>
          </div>

          <div className="col-span-9 p-4 h-full ">
            { user===null ||
              <section className="h-full shadow-md p-8">
               {selectedOption==="Personal Details" && <PersonalDetails/> } 
            </section>
            }

          </div>
        </div>
      ) : (
        Navigate("/login")
      )}
    </>
  );
};

export default Dashboard;
