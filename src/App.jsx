import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout";
import HomePage from "./views/HomePage";
import Contact from "./views/Contact";
import DrawingPage from "./views/DrawingPage";
import LogIn from "./views/Login";
import SignUp from "./views/SignUp";
import LearnMore from "./views/LearnMore";
import InformationForm from "./views/InformationForm";
import PreviewPage from "./views/PreviewPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "DrawingPage",
          element: <DrawingPage />,
        },
        {
          path: "LearnMore",
          element: <LearnMore />,
        },
        {
          path: "InformationForm",
          element: <InformationForm />,
        },
        {
          path: "PreviewPage",
          element: <PreviewPage />,
        },
        {
          path: "login",
          element: <LogIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "*",
          element: (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <h1 className="text-9xl font-black text-gray-200">404</h1>
              <p className="text-2xl font-bold text-gray-900 -mt-8">
                Page Not Found
              </p>
              <button className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold">
                Go Home
              </button>
            </div>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
