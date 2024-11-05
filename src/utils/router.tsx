import { createBrowserRouter } from "react-router-dom";

import { paths } from "./path";
import Layout from "./Layout";
import Error from "../pages/Error";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/SIgnup";
import Todo from "../pages/todo/Todo";

const router = createBrowserRouter([
  {
    path: paths.HOME,
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Todo /> },
      { path: paths.LOGIN, element: <Login /> },
      { path: paths.SIGNUP, element: <Signup /> },
      { path: paths.TODO, element: <Todo /> },
    ],
  },
]);

export default router;
