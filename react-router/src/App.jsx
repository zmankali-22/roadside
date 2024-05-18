import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import PostList, { postLoader } from "./pages/PostList";
import PostComments from "./pages/PostComments";
import Error from "./components/Error";
import Login from "./components/Login";
import Signup from "./components/Signup";
import RequiredAuth from "./components/RequiredAuth";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/auth",
        element: <Home />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
      {
        path: "/posts",
        element: (
          <RequiredAuth>
            <PostList />,
          </RequiredAuth>
        ),
        loader: postLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostComments />,
      },
      {
        path: "/products",
        element: <Products />
      }
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
