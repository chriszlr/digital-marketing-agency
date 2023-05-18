import { BsGeoAlt, BsCodeSquare, BsPeople, BsBuilding } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { AiOutlinePieChart, AiOutlineSetting } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className="py-14 px-4 mx-auto flex flex-col justify-between items-center bg-white text-black">
      <div className="flex flex-col text-center justify-between gap-1 items-center max-w-[1040px]">
        <h1 className="font-bold text-3xl lg:text-4xl tracking-tight">
          Full Service Digital Marketing Agency
        </h1>
        <button className="my-1 text-xs md:text-sm lg:text-lg text-blue-800 font-bold tracking-tight">
          Read More -{">"}
        </button>

        <p className="font-light my-1 max-w-[550px] md:text-xl text-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam at
          aut molestiae, sapiente quae minima.
        </p>
      </div>

      {/* services */}
      <div className="grid grid-cols-2 md:grid-cols-4 text-black my-5 gap-4">
        {/* item */}
        <div className="shadow-lg rounded-lg max-w-[175px] p-4 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-700 hover:text-white transition ease-out duration-300">
          <div className="flex flex-col justify-center ">
            <BsBuilding className="text-4xl" />
            <h2 className="sm:text-md md:text-xl font-bold">Lorem, ipsum.</h2>
            <p className="text-[10px] md:text-[13px] font-medium py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, ullam harum. Expedita!
            </p>
          </div>
          <button className="text-sky-400 text-[11px] md:text-[13px] font-medium tracking-wide flex justify-between items-center hover:text-white duration-300">
            View More <span className="font-bold ml-1">-{">"}</span>
          </button>
        </div>

        {/* item */}
        <div className="shadow-lg rounded-lg max-w-[175px] p-4 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-700 hover:text-white transition ease-out duration-300">
          <div className="flex flex-col justify-center ">
            <BsGeoAlt className="text-4xl" />
            <h2 className="sm:text-md md:text-xl font-bold">Lorem, ipsum.</h2>
            <p className="text-[10px] md:text-[13px] font-medium py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, ullam harum. Expedita!
            </p>
          </div>
          <button className="text-sky-400 text-[11px] md:text-[13px] font-medium tracking-wide flex justify-between items-center hover:text-white duration-300">
            View More <span className="font-bold ml-1">-{">"}</span>
          </button>
        </div>
        {/* item */}
        <div className="shadow-lg rounded-lg max-w-[175px] p-4 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-700 hover:text-white transition ease-out duration-300">
          <div className="flex flex-col justify-center ">
            <BsCodeSquare className="text-4xl" />
            <h2 className="sm:text-md md:text-xl font-bold">Lorem, ipsum.</h2>
            <p className="text-[10px] md:text-[13px] font-medium py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, ullam harum. Expedita!
            </p>
          </div>
          <button className="text-sky-400 text-[11px] md:text-[13px] font-medium tracking-wide flex justify-between items-center hover:text-white duration-300">
            View More <span className="font-bold ml-1">-{">"}</span>
          </button>
        </div>
        {/* item */}
        <div className="shadow-lg rounded-lg max-w-[175px] p-4 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-700 hover:text-white transition ease-out duration-300">
          <div className="flex flex-col justify-center ">
            <BsPeople className="text-4xl" />
            <h2 className="sm:text-md md:text-xl font-bold">Lorem, ipsum.</h2>
            <p className="text-[10px] md:text-[13px] font-medium py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, ullam harum. Expedita!
            </p>
          </div>
          <button className="text-sky-400 text-[11px] md:text-[13px] font-medium tracking-wide flex justify-between items-center hover:text-white duration-300">
            View More <span className="font-bold ml-1">-{">"}</span>
          </button>
        </div>
        {/* item */}
        <div className="shadow-lg rounded-lg max-w-[175px] p-4 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-700 hover:text-white transition ease-out duration-300">
          <div className="flex flex-col justify-center ">
            <GrNotes className="text-4xl" />
            <h2 className="sm:text-md md:text-xl font-bold">Lorem, ipsum.</h2>
            <p className="text-[10px] md:text-[13px] font-medium py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, ullam harum. Expedita!
            </p>
          </div>
          <button className="text-sky-400 text-[11px] md:text-[13px] font-medium tracking-wide flex justify-between items-center hover:text-white duration-300">
            View More <span className="font-bold ml-1">-{">"}</span>
          </button>
        </div>
        {/* item */}
        <div className="shadow-lg rounded-lg max-w-[175px] p-4 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-700 hover:text-white transition ease-out duration-300">
          <div className="flex flex-col justify-center ">
            <AiOutlinePieChart className="text-4xl" />
            <h2 className="sm:text-md md:text-xl font-bold">Lorem, ipsum.</h2>
            <p className="text-[10px] md:text-[13px] font-medium py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, ullam harum. Expedita!
            </p>
          </div>
          <button className="text-sky-400 text-[11px] md:text-[13px] font-medium tracking-wide flex justify-between items-center hover:text-white duration-300">
            View More <span className="font-bold ml-1">-{">"}</span>
          </button>
        </div>
        {/* item */}
        <div className="shadow-lg rounded-lg max-w-[175px] p-4 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-700 hover:text-white transition ease-out duration-300">
          <div className="flex flex-col justify-center ">
            <AiOutlineSetting className="text-4xl" />
            <h2 className="sm:text-md md:text-xl font-bold">Lorem, ipsum.</h2>
            <p className="text-[10px] md:text-[13px] font-medium py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, ullam harum. Expedita!
            </p>
          </div>
          <button className="text-sky-400 text-[11px] md:text-[13px] font-medium tracking-wide flex justify-between items-center hover:text-white duration-300">
            View More <span className="font-bold ml-1">-{">"}</span>
          </button>
        </div>
        {/* item */}
        <div className="shadow-lg rounded-lg max-w-[175px] p-4 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-700 hover:text-white transition ease-out duration-300">
          <div className="flex flex-col justify-center ">
            <RiSendPlaneLine className="text-4xl" />
            <h2 className="sm:text-md md:text-xl font-bold">Lorem, ipsum.</h2>
            <p className="text-[10px] md:text-[13px] font-medium py-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, ullam harum. Expedita!
            </p>
          </div>
          <button className="text-sky-400 text-[11px] md:text-[13px] font-medium tracking-wide flex justify-between items-center hover:text-white duration-300">
            View More <span className="font-bold ml-1">-{">"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
