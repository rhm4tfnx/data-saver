import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/homePage";
import AddData from "../pages/addDataPage";
import FindData from "../pages/findDataPage";
import Test from "../pages/test";
import ResponsiveLayout from "../components/Layouts/ResponsiveLayout";

const router = createBrowserRouter([
  {
    element: <ResponsiveLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add", element: <AddData /> },
      { path: "/find", element: <FindData /> },
    ],
  },
]);

export default router;
