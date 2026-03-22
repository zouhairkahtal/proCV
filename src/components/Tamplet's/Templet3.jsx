export default function Template3({ data }) {
  return (
    <div className="h-full flex overflow-hidden bg-white shadow-2xl rounded-lg min-h-[1055px] min-w-[800px]">
      {/* Main Content */}
      <main className="w-2/3 p-12 flex flex-col gap-10 bg-white">
        <header className="mb-8">
          <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-2">
            {data.fullName}
          </h1>
          <div className="h-2 w-20 bg-indigo-600 rounded-full"></div>
        </header>

        <section>
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-indigo-200"></span> Professional
            Profile
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            {data.summary}
          </p>
        </section>

        <section>
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-indigo-200"></span> Professional
            Experience
          </h2>
          <div className="pl-10 relative">
            <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-slate-100"></div>
            <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
              {data.experience}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-indigo-200"></span> Academic
            Background
          </h2>
          <div className="pl-10 relative">
            <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-slate-100"></div>
            <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
              {data.education}
            </p>
          </div>
        </section>
      </main>

      <aside className="w-1/3 bg-slate-900 text-white p-10 flex flex-col items-center gap-12 overflow-y-auto">
        {data.photo && (
          <img
            src={data.photo}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-slate-700 shadow-2xl"
          />
        )}
        <section className="space-y-6 w-full">
          <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-[0.3em] border-b border-slate-700 pb-2 text-center md:text-left">
            Contact
          </h2>
          <ul className="space-y-5 text-sm">
            <li className="group">
              <span className="text-slate-400 block mb-1">Email</span>
              <a
                href={`mailto:${data.email}`}
                className="text-white hover:text-indigo-400 transition-colors break-all"
              >
                {data.email}
              </a>
            </li>
            <li className="group">
              <span className="text-slate-400 block mb-1">Phone</span>
              <span className="text-white">{data.phone}</span>
            </li>
            <li className="group">
              <span className="text-slate-400 block mb-1">Location</span>
              <span className="text-white">{data.address}</span>
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-[0.3em] border-b border-slate-700 pb-2">
            Expertise
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.split(",").map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-800 text-indigo-200 rounded text-xs font-medium border border-slate-700"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-auto pt-10 border-t border-slate-800">
          <div className="flex items-center gap-3 opacity-50">
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
            <span className="text-[10px] uppercase tracking-widest">
              Premium Resume
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
}
