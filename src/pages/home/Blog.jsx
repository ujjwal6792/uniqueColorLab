import React from "react";
import Cardsquare from "../../components/cards/Cardsquare";
import content from "../../content";

const Blog = () => {
  return (<>
          <h1 className="text-center text-blue-dark font-semibold text-2xl mb-3 ">Our Latest Blog</h1>
        <h1 className="text-center text-blue-dark text-3xl md:text-5xl font-semibold">Our Blog and New Releases</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-2 lg:px-0 mx-auto gap-6 ">

      {content.Blog.slice(0, 3).map((item) => (
        <Cardsquare
          key={item.id}
          id={item.id}
          img={item.img}
          text={item.heading}
          cardClass={
            "flex w-80 h-max justify-evenly items-start px-0 pb-4 my-10 md:my-20"
          }
          imgClass={"py-0 -mt-4 mb-4 rounded-t-md object-contain w-full h-full"}
          paraClass={"px-4 font-semibold text-xl text-left"}
          button="Read more"
          function=""
        />
    ))}
    </div>
    </> );
};

export default Blog;
