import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AddCardContext from "../../context/addCart/AddCardContext";

export const Step3Component = ({ setStep, checkOutData }) => {
  const cart = useContext(AddCardContext);

  const setCheckOutDate = {
    checkoutDate: checkOutData?.checkoutDate,
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Use 12-hour format
    };
    return date.toLocaleString("en-US", options);
  };

  // const handlePrint = () => {
  //   const printWindow = window.open("", "_blank");
  //   printWindow.document.write(`
  //     <html>
  //       <head>
  //         <title>Checkout Receipt</title>
  //         <style>
  //           body { font-family: Arial, sans-serif;padding:25px }
  //           h1 { color: #232323; }
  //           .table { width: 100%; border-collapse: collapse; margin-top: 20px; }
  //           .table th, .table td { border: 1px solid #232323; padding: 8px; text-align: left; }
  //           .table th { background-color: #f2f2f2; }
  //           .total {text-align:end ;  font-weight: bold;}
  //         </style>
  //       </head>
  //       <body>
  //         <h1>YOUR ORDER</h1>
  //         <p>Thank you for purchasing Suze Orman's Personal Finance One One. Please retain this receipt for your records.</p>
  //         <h2>BILLING ADDRESS</h2>
  //         <p>Name : <span>${checkOutData?.firstName} ${
  //     checkOutData?.lastName
  //   }</span></p>
  //         <p>Address : <span>${checkOutData?.address}</span> </p>
  //         <p>Phone Number : <span>${checkOutData?.phone}</span> </p>
  //         <p>City :<span> ${checkOutData?.city}</span></p>
  //         <h2>ORDER SUMMARY</h2>
  //         <p>Order #: ${checkOutData?._id}</p>
  //         <p>Date: ${checkOutData?.checkoutDate}</p>
  //         <p>Order Total: ${checkOutData?.products.reduce(
  //           (acc, obj) => acc + obj.price,
  //           0
  //         )} Rs</p>

  //         <h2>Products</h2>
  //         <table class="table">
  //           <thead>
  //             <tr>
  //               <th>Product Name</th>
  //               <th>Quantity</th>
  //               <th>Price (Rs)</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             ${checkOutData?.products
  //               .map(
  //                 (product) => `
  //               <tr>
  //                 <td>${product.productId.name}</td>
  //                 <td>${product.quantity}</td>
  //                 <td>${product.price}</td>
  //               </tr>
  //             `
  //               )
  //               .join("")}
  //           </tbody>
  //         </table>
  //             <p class="total"> Total Price: ${checkOutData?.products.reduce(
  //               (acc, obj) => acc + obj.price,
  //               0
  //             )} Rs</p>
  //       </body>
  //     </html>
  //   `);
  //   printWindow.document.close();
  //   printWindow.print();
  //   navigate(`/`)
  // };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 pb-10 px-2 md:px-0 md:pb-0">
        <div className="border-[5px] border-[#232323] p-3 md:p-5 w-full md:w-3/5">
          <div>
            <h1 className="text-amber-500 font-semibold">YOUR ORDER</h1>
            <hr className="border-[#232323] my-2" />
            <div className="flex justify-between text-white">
              <h1 className="text-[#494949]">
                Thank you for purchasing Suze Orman's Personal Finance One One.
                Please retain this receipt for your records.
              </h1>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-5 md:gap-20 mt-10">
            <div className="w-full md:w-1/2 text-white">
              <h1 className="text-amber-500 font-semibold">BILLING ADDRESS</h1>
              <hr className="border-[#232323] border mt-1" />
              <div className="mt-2">
                <h1>
                  {checkOutData?.firstName} {checkOutData?.lastName}
                </h1>
                <h1>{checkOutData?.address}</h1>
                <h1>{checkOutData?.phone}</h1>
                <h1>{checkOutData?.city}</h1>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-white">
              <h1 className="text-amber-500 font-semibold">ORDER SUMMARY</h1>
              <hr className="border-[#232323] border mt-1" />
              <div className="mt-2">
                <div className="flex gap-1">
                  <h1 className="text-sm">Order # :</h1>
                  <h1 className="text-sm text-[#494949]">{checkOutData?._id}</h1>
                </div>
                <div className="flex gap-1">
                  <h1 className="text-sm">Date :</h1>
                  <h1 className="text-sm text-[#494949]">
                    {formatDate(setCheckOutDate?.checkoutDate)}
                  </h1>
                </div>
                <div className="flex gap-1">
                  <h1>Order Total :</h1>
                  <h1 className="text-[#494949]">
                    {checkOutData?.products.reduce(
                      (acc, obj) => acc + obj.price,
                      0
                    )}
                    /- Rs
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row  gap-5 md:gap-20">
            <div className="w-full md:w-3/5 mt-5">
              <h1 className="text-amber-500 font-semibold">YOUR ORDER</h1>
              <hr className="border-[#232323] my-2" />
              <div className="flex justify-between text-white">
                <h1>Subtotal</h1>
                <h1>
                  {checkOutData?.products.reduce(
                    (acc, obj) => acc + obj.price,
                    0
                  )}
                  /- Rs
                </h1>
              </div>
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-center items-center">
              <h1 className="text-white">Order Total</h1>
              <div className="flex ">
                <h1 className="text-7xl text-amber-500">
                  {checkOutData?.products.reduce(
                    (acc, obj) => acc + obj.price,
                    0
                  )}
                </h1>
                <h1 className="flex items-end text-amber-500">Rs</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            className="bg-white py-3 px-7 rounded-lg"
            onClick={() =>cart.handleComponentChange("order")}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
