import {
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Award,
  MousePointer2,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function LearnMore() {
  const features = [
    {
      title: "ATS-Friendly Templates",
      description:
        "Our templates are optimized for Applicant Tracking Systems, ensuring your CV gets past the first filter.",
      icon: <Shield className="text-blue-600" size={24} />,
    },
    {
      title: "Real-time Editing",
      description:
        "See your changes instantly with our high-performance live preview editor.",
      icon: <Zap className="text-yellow-500" size={24} />,
    },
    {
      title: "Professional Design",
      description:
        "Crafted by industry experts to highlight your strengths and achievements effectively.",
      icon: <Award className="text-purple-600" size={24} />,
    },
    {
      title: "Global Compatibility",
      description:
        "Support for multiple languages and regional CV formats (Resume, CV, Bio-data).",
      icon: <Globe className="text-green-600" size={24} />,
    },
    {
      title: "No Hidden Fees",
      description:
        "Transparency is our priority. Build, preview, and download with confidence.",
      icon: <CheckCircle className="text-teal-600" size={24} />,
    },
    {
      title: "Drag & Drop",
      description:
        "Easily reorder sections and customize your layout with intuitive controls.",
      icon: <MousePointer2 className="text-orange-500" size={24} />,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
          Everything you need to <br />
          <span className="text-blue-600">land your dream job.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          ProCV simplifies the complex process of creating a professional
          resume. Focus on your career, we'll handle the design and formatting.
        </p>
      </section>

      {/* Features Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose ProCV?
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 border border-gray-100 rounded-3xl hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 bg-white group hover:-translate-y-1"
            >
              <div className="mb-6 bg-gray-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-blue-50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-900 text-white rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              How it works
            </h2>
            <p className="text-gray-400">
              Three simple steps to a better career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Choose a Template",
                desc: "Select from our library of expertly designed templates.",
              },
              {
                step: "02",
                title: "Add Your Content",
                desc: "Fill in your details using our intuitive, step-by-step editor.",
              },
              {
                step: "03",
                title: "Download & Apply",
                desc: "Export your CV as an ATS-optimized PDF and start applying.",
              },
            ].map((s, i) => (
              <div key={i} className="relative">
                <span className="text-8xl font-black text-white/5 absolute -top-10 -left-4 leading-none">
                  {s.step}
                </span>
                <h3 className="text-xl font-bold mb-4 relative z-10">
                  {s.title}
                </h3>
                <p className="text-gray-400 leading-relaxed relative z-10">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto p-12 bg-blue-600 rounded-[3rem] shadow-2xl shadow-blue-200">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Ready to upgrade <br /> your career?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Join thousands of professionals who have used ProCV to land
            interviews at top companies.
          </p>
          <NavLink
            to="/DrawingPage"
            className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg"
          >
            Create Your CV Now
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default LearnMore;
