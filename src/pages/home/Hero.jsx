import content from "../../content";

const Hero = () =>
    <main className="flex flex-col min-h-full md:mb-8">
          <section className="md:w-2/3 lg:w-1/2  min-h-[70vh] flex flex-col p-2 md:pt-[10%] justify-center bg-white leading-8">
            <img
              className="w-64 ml-[18git%] mb-6"
              src={content.home.heroImage}
              alt="birds hero image"
            />
            <h3 className="text-4xl capitalize ">
              {content.home.heroHeadding}
            </h3>
            <p className="capitalize text-xl pt-2 ">{content.home.heroPara}</p>
            <button className="mt-8 text-lg border h-min w-max pt-2 pb-2 pl-4 pr-4 rounded border-blue-900 hover:bg-blue-900 hover:text-white hover:transition-opacity shadow-md">
              Explore Now
            </button>
          </section>
          <img src="" alt="" />
        </main>

export default Hero