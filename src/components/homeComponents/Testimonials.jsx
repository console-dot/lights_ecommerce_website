import React from "react";
import { TestimonialsCard } from "../resuableComponents";

export const Testimonials = () => {
  return (
    <div className="w-full flex justify-center mx-auto container py-10 p-4">
      <div className="md:border-[15px] border-[10px] border-gray-800 md:w-[75%] w-full   md:py-6 py-2 md:px-4 px-0">
        <TestimonialsCard />
      </div>
    </div>
  );
};
