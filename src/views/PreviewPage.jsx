import { useLocation } from "react-router-dom";
import { Mail, Phone, Linkedin, MapPin, Globe } from "lucide-react";
import "../../src/index.css";

function PreviewPage() {
  const location = useLocation();
  const data = location.state?.data;
  const id = location.state?.id;

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-gray-500">
          No data found. Please fill the form first.
        </p>
      </div>
    );
  }

  const Template1 = () => (
    <div className="h-full flex flex-col p-10 overflow-hidden bg-white text-gray-800 font-serif">
      {/* Header */}
      <header className="border-b-4 border-blue-600 pb-6 mb-8 text-center">
        <h1 className="text-5xl font-bold uppercase tracking-tight text-gray-900 mb-4">
          {data.fullName}
        </h1>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-blue-600" /> {data.email}
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-blue-600" /> {data.phone}
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={16} className="text-blue-600" /> LinkedIn
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-600" /> {data.address}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-col gap-8 text-left">
        <section>
          <h2 className="text-xl font-bold text-blue-800 uppercase border-b border-gray-200 mb-3 tracking-wide">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {data.summary}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-blue-800 uppercase border-b border-gray-200 mb-3 tracking-wide">
            Experience
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {data.experience}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-blue-800 uppercase border-b border-gray-200 mb-3 tracking-wide">
            Education
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {data.education}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-blue-800 uppercase border-b border-gray-200 mb-3 tracking-wide">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.split(",").map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium border border-gray-200"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  const Template2 = () => (
    <div className="h-full flex overflow-hidden bg-white shadow-2xl rounded-lg">
      {/* Sidebar */}
      <aside className="w-1/3 bg-[#a54141] text-white p-8 flex flex-col gap-10">
        <div className="pt-10">
          <h1 className="text-4xl font-extrabold leading-tight mb-2 underline decoration-white/30">
            {data.fullName}
          </h1>
          <p className="text-red-100 uppercase tracking-[0.2em] text-xs font-semibold">
            Curriculum Vitae
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-lg font-bold border-b border-white/30 pb-2 uppercase tracking-wider">
            Contact
          </h2>
          <ul className="space-y-4 text-sm text-red-50">
            <li className="flex items-start gap-3">
              <Mail size={18} className="shrink-0 mt-0.5" />{" "}
              <span className="break-all">{data.email}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="shrink-0 mt-0.5" />{" "}
              <span>{data.phone}</span>
            </li>
            <li className="flex items-start gap-3">
              <Linkedin size={18} className="shrink-0 mt-0.5" />{" "}
              <span>LinkedIn Profile</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="shrink-0 mt-0.5" />{" "}
              <span>{data.address}</span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-bold border-b border-white/30 pb-2 uppercase tracking-wider">
            Top Skills
          </h2>
          <div className="flex flex-col gap-3">
            {data.skills.split(",").map((skill, index) => (
              <div key={index} className="flex flex-col gap-1">
                <span className="text-sm font-medium text-red-100">
                  {skill.trim()}
                </span>
                <div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: `${Math.random() * (95 - 60) + 60}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </aside>

      {/* Main Content */}
      <main className="w-2/3 p-12 flex flex-col gap-10 bg-white">
        <section>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-10 bg-[#a54141]"></div>
            <h2 className="text-2xl font-black text-gray-800 uppercase tracking-widest">
              About Me
            </h2>
          </div>
          <p className="text-gray-600 leading-loose italic border-l-4 border-gray-100 pl-6 py-2">
            {data.summary}
          </p>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-10 bg-[#a54141]"></div>
            <h2 className="text-2xl font-black text-gray-800 uppercase tracking-widest">
              Experience
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
            {data.experience}
          </p>
        </section>

        <section>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-10 bg-[#a54141]"></div>
            <h2 className="text-2xl font-black text-gray-800 uppercase tracking-widest">
              Education
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
            {data.education}
          </p>
        </section>
      </main>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-blue-600 shadow-md py-4 px-6 mb-8 flex items-center justify-between sticky top-0 z-50">
        <h1 className="text-white font-bold text-lg tracking-wider">
          Previewing Template : {id}
        </h1>
        <button
          onClick={() => window.print()}
          className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-bold shadow transition-all active:scale-95"
        >
          Download PDF
        </button>
      </div>

      <div className="flex flex-col items-center justify-center p-5 gap-1">
        <div className="transform scale-75 md:scale-100 origin-top">
          <section className={`cv-container-${id} shadow-2xl relative`}>
            {<Template2 />}
          </section>
        </div>
      </div>
    </div>
  );
}

export default PreviewPage;
