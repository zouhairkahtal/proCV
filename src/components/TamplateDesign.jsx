import { useState } from "react";
import { NavLink } from "react-router-dom";
function TamplateDesign({ image, title, description, id }) {
  const [showTemplate, setShowTemplate] = useState(false);

  const viewTemplate = () => {
    setShowTemplate(true);
  };

  return (
    <div className="w-[200px] h-[200px] flex flex-col items-center justify-center m-10 ">
      <h1 className="p-2 text-blue-500 ">template :{id}</h1>
      <div className="w-[150px] border border-gray-200 rounded-lg ">
        <img
          src={image}
          alt={title}
          className="w-full h-full cursor-pointer"
          onClick={viewTemplate}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="p-1 text-xl text-blue-500">{title}</h1>
        <p className="p-1 text-gray-500 text-sm">{description}</p>
        <NavLink to="/InformationForm" state={{ id }}>
          <button className="p-2 text-white bg-blue-500 rounded-2xl mt-2">
            use template
          </button>
        </NavLink>
      </div>

      {showTemplate && (
        <div
          onClick={() => setShowTemplate(false)}
          className="w-full h-full absolute top-0 left-0 bg-white flex flex-col items-center justify-end -mt-5 "
        >
          <h1 className="p-2 text-blue-500">template :{id}</h1>
          <div className="p-5 bg-blue-500/20 rounded-2xl">
            <img
              src={image}
              alt={title}
              className="object-cover w-[500px] h-[700px]"
            />
          </div>
          <button
            onClick={() => setShowTemplate(false)}
            className="w-10 h-10 text-white bg-blue-500 rounded-full mt-10 "
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default TamplateDesign;
