import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import "../../src/index.css";
import Template1 from "../components/Tamplet's/Tamplet1";
import Template2 from "../components/Tamplet's/Templet2";
import Template3 from "../components/Tamplet's/Templet3";

function PreviewPage() {
  const location = useLocation();
  const data = location.state?.data;
  const id = location.state?.id;

  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-gray-500">
          No data found. Please fill the form first.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-blue-600 shadow-md py-4 px-6 mb-8 flex items-center justify-between sticky top-0 z-50">
        <h1 className="text-white font-bold text-lg tracking-wider">
          Previewing Template : {id}
        </h1>
        <button
          onClick={reactToPrintFn}
          className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-bold shadow transition-all active:scale-95"
        >
          Download PDF
        </button>
      </div>

      <div className="flex flex-col items-center justify-center p-5 gap-1">
        <div className="transform scale-75 md:scale-100 origin-top">
          <section ref={contentRef} className={`cv-container-${id}  relative`}>
            {id === "1" ? (
              <Template1 data={data} />
            ) : id === "2" ? (
              <Template2 data={data} />
            ) : (
              <Template3 data={data} />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default PreviewPage;
