const ReservationEventPage = () => {
  return (
    <>
      <div className=" w-full h-fit md:flex border border-[#9427F7] py-7 px-5 rounded-xl cursor-default">
        <div>
          <img
            className="object-cover w-full md:h-full md:max-w-[300px] h-[180px] rounded-md "
            src="https://dmttourism.com/images/property/13/1740383146_promoted1.jpeg"
            alt=""
          />
        </div>
        <div className=" relative md:px-8 w-full ">
          <div>
            <div className="flex items-center gap-3 pb-2 pt-2 md:pt-0  md:-ml-3 ">
              <h1 className="font-semibold text-xl hover:text-[#9427F7] transition-all ">
                Onsite Event
              </h1>
              <p className="pr-3 text-[#9427F7]">Accepte </p>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="font-semibold">Ref number</h1>
              <p className="pr-3">60rIHK</p>
            </div>

            <div className="flex mt-3 gap-3">
              <h1 className="font-semibold ">Location</h1>
              <p className="pr-3 pb-2 lg:w-[60%] w-[60%] ">
                Talim Kendra chauk, Biratnagar 13, विराटनगर 56613, Nepal
              </p>
            </div>
          </div>
          <div className=" w-28 md:w-fit ">
            <h1> Apr 12, 2025 - Apr 13, 2025</h1>
            <button className="mt-2 font-semibold border-b-4 border-e-4  rounded-xl p-1 hover:border-[#9427F7] hover:text-[#9427F7]  ">
              Details
            </button>
          </div>
          <div className="flex flex-col gap-1  text-right md:-mt-[150px] -mt-[100px] lg:-mt-[110px] ">
            <h1 className="font-semibold">NPR 525</h1>
            <h1>request</h1>
            <h1>1 Night</h1>
          </div>
          <div className="md:mt-20 lg:mt-12 mt-10 md:flex md:items-center gap-5 ">
            <h1>Change Your Meeting Date</h1>
            <div className="flex items-center gap-3 mt-2 lg:mt-0 " >
              <input className="border border-[#9C59DF] p-2 px-8 rounded-md" type="date" />
              <button className="border bg-[#008CBA] p-2 px-3 rounded-md text-white">Update</button>
            </div>
          </div>
          <div className=" md:flex gap-5 mt-5">
            <h1>Select Dates for Event:</h1>
            <input className="border border-[#9C59DF] mt-2 p-2 px-8 rounded-md" type="date" />
            <h1 className="mt-5 md:mt-0" >Select Time for All Dates:</h1>
            <input className="border border-[#9C59DF] mt-2 p-2 px-8 rounded-md" type="time" />
          </div>
          <button className=" bg-[#9C59DF]  md:py-3 py-3 w-[100%] mt-5 rounded">
            Create Meating Room
          </button>
          <h1 className="mt-5">Only Avilable when Host will accept</h1>
        </div>
      </div>
    </>
  );
};

export default ReservationEventPage;
