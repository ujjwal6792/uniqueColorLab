import { FiPhoneCall } from "react-icons/fi";
import Cardsquare from "../../components/cards/Cardsquare";
import { GoLocation, GoMail, GoDeviceMobile } from "react-icons/go";
import { FaFacebookSquare,FaInstagram, FaTwitterSquare } from "react-icons/fa";
import content from "../../content";
import maps from "./map.svg";
import DottedMap from "dotted-map";

const map = new DottedMap({ height: 80, grid: "diagonal" });

const Contact = () => {
  map.addPin({
    lat: 26.8342082216277,
    lng: 80.92466290549243,
    svgOptions: { color: "#234579", radius: 0.8 },
  });
  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#423B38",
    shape: "circle",
    backgroundColor: "#ffffff",
  });

  return (
    <div className="md:pt-24 flex flex-col">
      <section className="flex flex-col w-full justify-center items-center">
        <p className="text-7xl w-full flex items-center justify-center h-80 text-blue-dark shadow mb-10 md:mb-20 z-10">
          Contact Us
        </p>
        <FiPhoneCall className="text-blue-dark text-xl drop-shadow-md mb-2" />
        <h1 className="text-center uppercase text-blue-dark font-semibold text-2xl mb-3 ">
          Get in touch
        </h1>
        <h1 className="text-center capitalize text-blue-dark text-3xl md:text-3xl font-semibold">
          Call Now or write a message
        </h1>
      </section>
      <section className="flex flex-col md:flex-row mt-10 gap-6 px-6 z-10">
        <Cardsquare
          text={content.contact[0].text}
          highlight={content.contact[0].heading}
          imgClass="hidden"
          cardClass="w-[33%] min-h-[250px] min-w-[220px] max-w-[320px]"
          button="hidden"
        >
          <GoLocation className="text-5xl text-blue-dark" />
        </Cardsquare>
        <Cardsquare
          text={content.contact[1].text}
          highlight={content.contact[1].heading}
          imgClass="hidden"
          cardClass="w-[33%] min-h-[250px] min-w-[220px] max-w-[320px]"
          button="hidden"
        >
          <GoMail className="text-5xl text-blue-dark" />
        </Cardsquare>
        <Cardsquare
          text={`+91 r- ${content.contact[2].text}`}
          highlight={content.contact[2].heading}
          imgClass="hidden"
          cardClass="w-[33%] min-h-[250px] min-w-[220px] max-w-[320px]"
          button="hidden"
        >
          <GoDeviceMobile className="text-5xl text-blue-dark" />
        </Cardsquare>
      </section>
      <section className="h-[100vh] object-cover w-full z-0 -mt-32">
        <img
          className=""
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        />
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 -mt-96 z-10 justify-between items-center">
        {/* contact form */}
        <section>form</section>
        <div>
        {/* opening hours */}
        <section className="flex flex-col justify-center items-center bg-white h-full w-[80%] shadow-md px-8 mx-auto py-8 rounded-t-md">
          <h1 className="font-semibold px-2 text-blue-dark mb-2">
            Opening Hours
          </h1>
          <h1 className="font-semibold px-2 text-2xl text-blue-dark mb-4">
            We Are Open
          </h1>
          <ul className="px-2 sm:px-24 md:px-4 lg:px-20 grid gap-2  w-full">
            <li className="flex justify-between">
              <span className="sm:text-lg">Weekdays</span>
              <span className="font-semibold">09:00-22:00</span>
            </li>
            <li className="flex justify-between">
              <span className="sm:text-lg">Saturday</span>
              <span className="font-semibold">09:00-23:00</span>
            </li>
            <li className="flex justify-between">
              <span className="sm:text-lg">Sunday</span>
              <span className="font-semibold">Closed</span>
            </li>
          </ul>
        </section>
        {/* socials */}
        <section className="bg-blue-dark text-xl text-white px-8 mx-auto py-8 w-[80%] rounded-b-md flex justify-between items-center">
        <span>Follow Us On</span>
        <span className="flex gap-4">
            <FaFacebookSquare/>
            <FaInstagram/>
            <FaTwitterSquare/>
        </span>
        </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
