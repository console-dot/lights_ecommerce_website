import React from "react";

export const AboutUsHeading = () => {
  return (
    <div className="pt-40 flex justify-center items-center">
      <div className="container">
        <div className="flex flex-col">
          <div>
            {" "}
            <h1 className="text-center text-4xl md:text-5xl uppercase text-gray-800 tracking-wide font-playfair font-normal">
              who We Are
            </h1>
          </div>

          <div>
            {" "}
            <p className="text-center px-60 py-5">
              Sharing your organisation’s story. Best practice for content
              creation. Calls to action. Using multimedia to bring your message
              to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
