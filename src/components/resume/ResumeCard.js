import React from "react";

const ResumeCard = ({ title, subTitle, result, location, des, logo }) => {
  return (
    <div className="w-full h-1/3 group flex">
      {/* Timeline indicator */}
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>

      {/* Card Content */}
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-4 shadow-shadowOne">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Logo */}
          {logo && (
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt={`${title} logo`}
                className="w-24 h-24 object-contain rounded-lg shadow-md -ml-4"
              />
            </div>
          )}

          {/* Title and Subtitle */}
           <div>
             <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
             </h3>
             <p className="text-sm mt-1 text-gray-400 group-hover:text-white duration-300">
               {subTitle}
             </p>
           </div>
         </div>

         {/* Location and Result */}
         <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 mt-4">
           {location && (
             <div>
               <p className="px-4 py-2 text-white bg-black bg-opacity-25 rounded-lg shadow-shadowOne text-sm font-medium">
                 {location}
               </p>
             </div>
           )}
           {result && (
             <div>
               <p className="px-4 py-2 text-white bg-black bg-opacity-25 rounded-lg shadow-shadowOne text-sm font-medium">
                 {result}
               </p>
             </div>
           )}
         </div>
        {/* Description */}
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 mt-4">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;

