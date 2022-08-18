import React from "react";
import Cardsquare from "../../components/cards/Cardsquare";
import content from "../../content";

const Blog = () => {
  return (
    <>
      <img className="mx-auto w-10 mb-2 skew-x-12 -skew-y-12" src="data:image/png;base64,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"></img>
      <h1 className="text-center text-blue-dark font-semibold text-2xl mb-3 ">
        Our Latest Blog
      </h1>
      <h1 className="text-center text-blue-dark text-3xl md:text-5xl font-semibold">
        Our Blog and New Releases
      </h1>
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
            imgClass={
              "py-0 -mt-4 mb-4 rounded-t-md object-contain w-full h-full"
            }
            paraClass={"px-4 font-semibold text-xl text-left"}
            button="Read more"
            function=""
          />
        ))}
      </div>
    </>
  );
};

export default Blog;
