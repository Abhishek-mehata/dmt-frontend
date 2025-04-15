import { useState } from "react";
import "../../../index.css";
import { DatePicker } from "antd";

const StaysForm = () => {
  const [value, setValue] = useState(1);
  const { RangePicker } = DatePicker;
  return (
    <>
      <div className=" p-10 lg:px-32 lg:flex lg:gap-20 ">


        <main>
          <div className="flex flex-col gap-10 border-b pb-10 border-[#DEE2E6] ">
            <h1 className="text-3xl font-semibold">Confirm and pay</h1>
            <h1 className="text-2xl font-semibold ">Your trip</h1>
            <div className="flex items-center" >
              <label className="pr-2 " htmlFor="date">
                Dates:
              </label>
              <div
                className={` w-[220px] flex gap-1 justify-start items-center cursor-pointer p-2 px-3 border border-primary rounded-md rounded-bl-md bg-white`}
              >
                <RangePicker
                  suffixIcon={null}
                  bordered={false}
                  className={`w-full`}
                />
              </div>
            </div>
            <div>
              <p className="mb-2">Guests:</p>
              <button
                onClick={() => {
                  if (value >= 2) {
                    setValue(value - 1);
                  } else {
                    null;
                  }
                }}
                className="px-5 py-[10px] bg-[#9C59DF] rounded text-white text-xl font-semibold "
                type="button"
              >
                -
              </button>
              <input
                className="border rounded h-11 mx-2 w-[200px] p-3 border-[#9C59DF]"
                type="number"
                min={1}
                value={value}
              />
              <button
                onClick={() => {
                  setValue(value + 1);
                }}
                className="px-5 py-[10px] rounded bg-[#9C59DF] text-white text-xl font-semibold"
                type="button"
              >
                +
              </button>
            </div>
          </div>
          <div className="pt-10 pb-5 border-b border-[#DEE2E6] ">
            <div className="flex flex-col gap-9">
              <h1 className="text-2xl font-semibold ">
                You will pay after host approval
              </h1>
              <input
                className="border h-56 rounded-md border-[#DEE2E6]  px-8 text-lg "
                type="textfield"
                placeholder="Type messege to Host."
              />
            </div>
            <div className="mt-10 flex flex-col gap-8 border border-[#DEE2E6] rounded-md p-8">
              <h1 className="text-2xl font-semibold ">Cancellation policy</h1>
              <p>This reservation is refundable before May 28, 2022</p>
              <p>
                Our Extenuating Circumstances policy does not cover travel
                disruptions caused by COVID-19.
              </p>
            </div>
          </div>
          <div className="py-5">
            <p className=" text-sm ">
              By selecting the button below, I agree to the Host's House Rules,
              Airbnb's Rebooking and Refund Policy, and that Airbnb can charge
              my payment method if I'm responsible for damage.
            </p>
            <button className="p-5  bg-[#9C59DF] rounded-md mt-5 text-white font-semibold " type="submit">
              Confirm and pay
            </button>
          </div>
        </main>


        <div className="card-container lg:w-[35%] lg:min-w-[300px] flex flex-col gap-5 h-fit border border-[#DEE2E6] rounded-xl p-5 sticky top-24 ">
          <div className="border-b-2 border-[#DEE2E6] pb-5 ">
            <img
              className="object-cover h-36 w-full rounded-xl "
              src="https://dmttourism.com/images/property/13/1740383146_promoted1.jpeg"
              alt=""
            />
          </div>
          <div className="border-b-2 border-[#DEE2E6] pb-5 flex flex-col ">
            <h1 className="text-2xl font-semibold mb-7">Price details</h1>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold">Test</h1>
              <p className="opacity-90 text-sm">NPR 25</p>
            </div>
            <div className="flex items-center justify-between ">
              <h1 className="font-semibold">Service fee</h1>
              <p className="opacity-90 text-sm">NPR 500</p>
            </div>
          </div>
          <div className="flex items-center justify-between font-semibold ">
            <h1>Total</h1>
            <h1>525</h1>
          </div>
        </div>


      </div>
    </>
  );
};

export default StaysForm;
