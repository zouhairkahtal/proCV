import TamplateDesign from "../components/TamplateDesign";
import Template1 from "../assets/CVs/Template1.png";
import Template2 from "../assets/CVs/Template2.png";
import Template3 from "../assets/CVs/Template3.png";

const Template = [
  {
    id: "1",
    image: Template1,
    title: "Modern Professional",
    description: "A clean and balanced template for most industries.",
  },
  {
    id: "2",
    image: Template2,
    title: "Modern Professional",
    description: "A clean and balanced template for most industries.",
  },
  {
    id: "3",
    image: Template3,
    title: "Modern Professional",
    description: "A clean and balanced template for most industries.",
  },
];

export default function DrawingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <section className="w-full py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-900 ">
            <span className="py-2 px-3 text-2xl bg-blue-600 rounded-full text-white mr-2">
              01
            </span>
            step
          </h1>
          <p className="text-gray-600 mt-5">choose a template</p>

          <div className="   grid grid-cols-[1fr_1fr_1fr]   p-10 gap-x-10 gap-y-20  mt-10 ">
            {Template.map((template) => (
              <TamplateDesign
                key={template.id}
                image={template.image}
                title={template.title}
                description={template.description}
                id={template.id}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
