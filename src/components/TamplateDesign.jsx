import { useState } from "react";
import { NavLink } from "react-router-dom";
function TamplateDesign({ image, title, description, id }) {
  const [showTemplate, setShowTemplate] = useState(false);

  const viewTemplate = () => {
    setShowTemplate(true);
  };

  return (
    <div className=" grid grid-rows-[1fr_1fr_1fr] h-[400px]  m-10  ">
      <h1 className="p-2 text-blue-500 ">template :{id}</h1>
      <div className="w-full h-full  max-h-[222px] flex items-center  justify-center bg-black border border-gray-200 rounded-lg  ">
        <img
          src={image}
          alt={title}
          className="w-full h-full max-h-[222px] object-cover cursor-pointer "
          onClick={viewTemplate}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="p-1 text-xl text-blue-500">{title}</h1>
        <p className="p-1 text-gray-500 text-sm">{description}</p>
        <NavLink to="/InformationForm" state={{ id }}>
          <button className="py-2 px-4 font-semibold text-white bg-blue-500 rounded-2xl mt-2 uppercase">
            use
          </button>
        </NavLink>
      </div>

      {showTemplate && (
        <div
          onClick={() => setShowTemplate(false)}
          className="w-full h-full absolute top-0 left-0 bg-white flex flex-col items-center justify-center -mt-5 "
        >
          <h1 className="p-2 text-blue-500">template :{id}</h1>
          <div className="flex  items-center justify-center">
            <div className=" bg-blue-500/20 rounded-2xl">
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full "
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TamplateDesign;
