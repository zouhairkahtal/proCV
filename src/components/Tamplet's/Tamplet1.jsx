import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export default function Template1({ data }) {
  return (
    <div className="h-full min flex flex-col p-10 overflow-hidden bg-white text-gray-800 font-serif min-h-[1055px] min-w-[800px]">
      {/* Header */}
      <header className="border-b-4 border-blue-600 pb-6 mb-8 flex flex-col items-center">
        {data.photo && (
          <img
            src={data.photo}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-100 mb-4 "
          />
        )}
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
}
