import AboutPage from "../pages/aboutPage";
import HomePage from "../pages/homePage";
import NotFound from "../pages/notFound";
import MainRoot from "./mainRoot";

const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "haqqimizda",
        element: <AboutPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default ROUTES;
