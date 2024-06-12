import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import {
  CreatePost,
  Details,
  EditPost,
  Error,
  Feed,
  Auth,
  Gurad,
} from "./pages/index";
import { loader as feedLoader } from "./pages/Feed";
import { loader as postDetailsLoader } from "./pages/Details";
import { loader as logoutLoader } from "./pages/Logout";
import { action as createPostAction } from "./pages/CreatePost";
import { action as postDeleteInDetailsAction } from "./pages/Details";
import { action as postDeleteInFeedAction } from "./pages/Feed";
import { action as editPostAction } from "./pages/EditPost";
import { action as authAction } from "./pages/Auth";
import { ToastContainer } from "react-toastify";
import { ConfirmDialog } from "primereact/confirmdialog";
import { checkTokenLoader, tokenLoader } from "./utils/auth";
const router = createBrowserRouter([
  {
    path: "",
    id: "root",
    element: <Main />,
    errorElement: <Error />,
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <Feed />,
        loader: feedLoader,
        action: postDeleteInFeedAction,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
        loader: checkTokenLoader,
      },
      {
        path: "post/:id",
        id: "post-details",
        loader: postDetailsLoader,
        children: [
          {
            index: true,
            element: <Details />,
            action: postDeleteInDetailsAction,
          },
          {
            path: "edit-post",
            element: <EditPost />,
            action: editPostAction,
            loader: checkTokenLoader,
          },
        ],
      },
      {
        path: "/auth",
        element: <Auth />,
        action: authAction,
      },
      { path: "/logout", loader: logoutLoader },
      { path: "/web-guard", element: <Gurad /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
      <ConfirmDialog />
    </>
  );
}

export default App;
