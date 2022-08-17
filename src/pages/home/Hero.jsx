import HomeButton from "../../components/buttons/HomeButton";
import content from "../../content";

const Hero = () =>
    <main className="flex flex-col min-h-full max-h-[700px] ">
          <section className="md:w-2/3 lg:w-1/2  min-h-[70vh] flex flex-col p-2 md:pt-[10%] justify-center bg-white leading-8">
            <img
              className="w-64 mx-auto sm:ml-[18%] mb-6"
              src={content.home.heroImage}
              alt="birds hero image"
            />
            <h3 className="text-4xl capitalize ">
              {content.home.heroHeadding}
            </h3>
            <p className="capitalize text-xl pt-2 ">{content.home.heroPara}</p>
            <HomeButton function={""} text={"Explore Now"} style={"rounded"}/>
          </section>
          <img src="" alt="" />
        </main>

export default Hero