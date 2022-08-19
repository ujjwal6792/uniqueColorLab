import { useRef } from "react";
import { FiPhoneCall } from "react-icons/fi";
import Cardsquare from "../../components/cards/Cardsquare";
import { GoLocation, GoMail, GoDeviceMobile } from "react-icons/go";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import content from "../../content";
import maps from "./map.svg";
import DottedMap from "dotted-map";
import emailjs from "@emailjs/browser";

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className=" md:pt-24 flex flex-col">
      <section className="flex flex-col w-full justify-center items-center">
        <p className="text-7xl w-full flex items-center justify-center h-96 sm:h-[30rem] md:h-80 text-blue-dark md:shadow mb-10 md:mb-20 z-10">
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
          buttonClass="hidden"
        >
          <GoLocation className="text-5xl text-blue-dark" />
        </Cardsquare>
        <Cardsquare
          text={content.contact[1].text}
          highlight={content.contact[1].heading}
          imgClass="hidden"
          cardClass="w-[33%] min-h-[250px] min-w-[220px] max-w-[320px]"
          buttonClass="hidden"
        >
          <GoMail className="text-5xl text-blue-dark" />
        </Cardsquare>
        <Cardsquare
          text={`+91 - ${content.contact[2].text}`}
          highlight={content.contact[2].heading}
          imgClass="hidden"
          cardClass="w-[33%] min-h-[250px] min-w-[220px] max-w-[320px]"
          buttonClass="hidden"
        >
          <GoDeviceMobile className="text-5xl text-blue-dark" />
        </Cardsquare>
      </section>
      <section className="h-[100vh] object-cover w-full z-0 -mt-32">
        <img
          className="md:relative absolute top-20"
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        />
      </section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 -mt-[46rem] md:-mt-96 z-10 justify-between items-center mb-10 md:mb-20">
        {/* contact form */}

        <section className="bg-white shadow-md justify-center items-center h-full w-[80%] px-8 mx-auto py-8 rounded-md">
          <form className="flex flex-col text-blue-dark " ref={form} onSubmit={sendEmail}>
            <label className="sm:text-lg">Name</label>
            <input
              className="sm:text-lg border-2 text-lg py-1 px-2 border-blue-dark rounded-md focus:outline-0 text-blue-dark shadow"
              type="text"
              name="user_name"
            />
            <label className="sm:text-lg">Email</label>
            <input
              className="sm:text-lg border-2 text-lg py-1 px-2 border-blue-dark rounded-md focus:outline-0 text-blue-dark shadow"
              type="email"
              name="user_email" 
            />
            <label className="sm:text-lg">Your Message</label>
            <textarea
              className="sm:text-lg border-2 text-lg py-1 px-2 border-blue-dark rounded-md focus:outline-0 text-blue-dark shadow"
              name="message"
            />
            <input
              className="mt-2 text-lg h-min w-max border-blue-900 hover:bg-blue-900 hover:text-white hover:transition-opacity shadow-md rounded-md px-2 py-1 text-blue-dark border-2"
              type="submit"
              value="Send"
            />
          </form>
        </section>

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
              <FaFacebookSquare />
              <FaInstagram />
              <FaTwitterSquare />
            </span>
          </section>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.183399686237!2d80.92247291500554!3d26.834118469929177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfc4b30113dd7%3A0x3bec3039de49d58e!2sUnique%20Color%20Lab!5e0!3m2!1sen!2sin!4v1660887335229!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Contact;
