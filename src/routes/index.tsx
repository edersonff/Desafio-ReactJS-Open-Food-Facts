import { createBrowserRouter } from "react-router-dom";
import Home from "../screens";
import Admin from "../screens/admin";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);
