import AboutPage from "../pages/aboutPage";
import ContactPage from "../pages/contactPage";
import HomePage from "../pages/homePage";
import NotFound from "../pages/notFound";
import PartnersPage from "../pages/partnersPage";
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
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "partners",
        element: <PartnersPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default ROUTES;
