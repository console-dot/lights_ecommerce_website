import React, { useState } from "react";
import {
  Step1Component,
  Step2Component,
  Step3Component,
} from "../components/checkoutComponents";

export const CheckOutPage = () => {
  const [step, setStep] = useState("1");
  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center">
          <h1 className="text-amber-500 text-4xl font-bold mt-10 ">CHECKOUT</h1>
        </div>

        <div className="flex justify-center items-center mt-5">
          <ul className="steps w-1/2 text-white ">
            <li className="step step-primary" value={"1"}>
              Billing/Paymant
            </li>
            <li
              className={`step ${
                step === "2" || step > "2" ? "step-primary" : ""
              }`}
              value={"2"}
            >
              Confirmation
            </li>
            <li
              className={`step ${step === "3" ? "step-primary" : ""}`}
              value={"3"}
            >
              Your Receipt
            </li>
          </ul>
        </div>

        {step === "1" && <Step1Component setStep={setStep} />}
        {step === "2" && <Step2Component setStep={setStep} />}
        {step === "3" && <Step3Component setStep={setStep} />}
      </div>
    </>
  );
};
