import { useNavigate } from "react-router-dom";
import HomeButton from "../buttons/HomeButton";
import content from "../../content";

const AboutSection = (props) => {

    const Navigate= useNavigate()
                
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 items-center justify-center ${props.mainClass}`}>
      {/* left */}
      <section className="relative p-4">
        <img className="aspect-square w-11/12 sm:w-11/12  rounded-md
        "  src={content.home.About.img} alt="About image" />
        <h2 className="absolute text-2xl capitalize bg-blue-50 bottom-[35%] px-4 py-4 left-0" >
            25+ years of experience
        </h2>
      </section>
      {/* right */}
      <section className="flex-1 p-8 ">
        <p className="text-xl font-semibold text-blue-dark">About Us</p>
        <p className="text-4xl mt-1 font-semibold">
            {content.home.About.heading}</p>
        <p className="text-lg text-slate-700 mt-12 rounded-r-md bg-blue-50 px-4 md:px-8 py-4
        border-l-4 border-blue-dark">
        {content.home.About.para}</p>
        <HomeButton function={()=>Navigate('/about')} text={"Learn More"} style={"rounded"}/>
   
      </section>
    </div>
  );
};

export default AboutSection;
