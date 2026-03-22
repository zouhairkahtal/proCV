import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export default function Template2({ data }) {
  return (
    <div className="h-full flex overflow-hidden bg-white  rounded-lg min-h-[1055px] min-w-[800px]">
      {/* Sidebar */}
      <aside className="w-1/3 bg-[#a54141] text-white p-8 flex flex-col items-center gap-10 overflow-y-auto">
        <div className="pt-10 flex flex-col items-center text-center">
          {data.photo && (
            <img
              src={data.photo}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-white/20 mb-6 "
            />
          )}
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
}
