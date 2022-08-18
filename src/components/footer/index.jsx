import Logo from "../../assets/logo.webp";
import HomeButton from "../buttons/HomeButton";
import { GoLocation, GoDeviceMobile, GoMail } from "react-icons/go";
import { FaFacebookSquare,FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  const year = new Date().toString().slice(10, 16);
  return (
    <div className="hidden md:grid grid-cols-4 text-blue-dark shadow-lg'
    min-h-[400px] bg-gradient-to-b from-[#ffffff] to-[#ECE9E650] ">
      {/* left */}
      <section className="flex flex-col justify-between px-4 pt-8 pb-8">
         <h1 className="font-semibold border-l-2 border-blue-dark px-2 text-lg text-blue-dark">
          Our Products
        </h1>
        <ul className="w-full px-8">
          <li className="flex items-center gap-2">
            Albums
          </li>
          <li className="flex items-center gap-2">
            Acrylic Frames
          </li>
          <li className="flex items-center gap-2">
            Lamination Frames
          </li>
        </ul>
        <h1 className="font-semibold border-l-2 border-blue-dark px-2 text-lg text-blue-dark capitalize">
          Follow us on socials
        </h1>
        <ul className="w-full px-8">
          <li className="flex items-center gap-2">
            <FaFacebookSquare /> Facebook
          </li>
          <li className="flex items-center gap-2">
            <FaInstagram /> Instagram
          </li>
          <li className="flex items-center gap-2">
            <FaTwitterSquare /> Twitter
          </li>
        </ul>
      </section>

      {/* mid */}
      <section className="col-span-2 flex flex-col justify-between items-center px-4 pt-8 pb-2 shadow-sm ">
        <img className="w-32" src={Logo} alt="company logo" />
        <p className="text-center my-5 text-slate-700 ">
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Using lorem ipsum .
        </p>
        <h1 className="font-semibold border-l-2 border-blue-dark px-2 text-lg text-blue-dark">
          Subscribe for Catalog
        </h1>
        <span className="-mt-5">
          <input
            className="border-2 text-lg py-1 px-2 border-blue-dark rounded-l-md border-r-0 focus:outline-0 text-blue-dark shadow "
            type="email"
            placeholder="Email"
          />
          <HomeButton
            style={"rounded-r-md px-2 py-1 text-blue-dark border-2"}
            text={"Send"}
          />
        </span>
        <p className="mt-4 text-slate-500">{` ©${year} UniquecolorLabs. All right Reserved`}</p>
      </section>

      {/* right */}
      <section className="flex flex-col justify-between px-4 pt-8 pb-8  ">
        <h1 className="font-semibold border-l-2 border-blue-dark px-2 text-lg text-blue-dark">
          Contact Info
        </h1>
        <ul className="w-full px-8">
          <li className="flex items-center gap-2">
            <GoLocation /> Charbagh, Lucknow
          </li>
          <li className="flex items-center gap-2">
            <GoDeviceMobile /> +91-9999002344
          </li>
          <li className="flex items-center gap-2">
            <GoMail />
            TilakPhotos@gmail.com
          </li>
        </ul>
        <h1 className="font-semibold border-l-2 border-blue-dark px-2 text-lg text-blue-dark">
          Opening Hours
        </h1>
        <ul className="px-8 w-full">
          <li className="flex justify-between">
            <span>Weekdays</span>
            <span className="font-semibold">09:00-22:00</span>
          </li>
          <li className="flex justify-between">
            <span>Saturday</span>
            <span className="font-semibold">09:00-23:00</span>
          </li>
          <li className="flex justify-between">
            <span>Sunday</span>
            <span className="font-semibold">Closed</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default Footer;
