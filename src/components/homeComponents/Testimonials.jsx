import React from "react";
import { TestimonialsCard } from "../resuableComponents";

export const Testimonials = () => {
  return (
    <div className="w-full flex justify-center mx-auto container py-10 p-4">
      <div className=" border-[10px] border-gray-800 lg:w-[75%] w-full   md:py-6 py-2 lg:px-4 px-0">
        <TestimonialsCard />
      </div>
    </div>
  );
};
