import AboutSection from "../../components/aboutSection";
import OurServices from "../../components/ourServices";

const About = () => {
  return <div className="pt-20 md:pt-24 flex flex-col">
    <AboutSection mainClass=" mb-20"/>
    <OurServices mainClass="mb-10 md:mb-20"/>
    </div>
}

export default About;
