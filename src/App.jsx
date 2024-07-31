import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./routes";

function App() {
  const router = createBrowserRouter(ROUTES);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
