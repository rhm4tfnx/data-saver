import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/homePage";
import AddData from "../pages/addDataPage";
import FindData from "../pages/findDataPage";
import Test from "../pages/test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/add",
    element: <AddData />,
  },
  {
    path: "/find",
    element: <FindData />,
  },
]);

export default router;
