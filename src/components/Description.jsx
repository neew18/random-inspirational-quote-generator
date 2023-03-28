import React from "react";
import Quote from "./Quote";

function Description() {
  return (
    <main className="my-5 mx-2 text-justify ">
      <p>
        The Inspirational Quotes Generator is the perfect tool to make your day
        brighter. It provides a daily dose of motivation with an ever-growing
        collection of inspirational quotes from some of the world’s greatest
        thinkers and doers. Get creative and explore the different categories to
        find that perfect motivational quote. Don’t let the mundane routine dull
        your spark, let the Inspirational Quotes Generator be your guide to
        success.
      </p>
      <h3 className="text-center my-4 text-lg font-semibold">
        Quote of the day
      </h3>
      <Quote />
    </main>
  );
}

export default Description;
