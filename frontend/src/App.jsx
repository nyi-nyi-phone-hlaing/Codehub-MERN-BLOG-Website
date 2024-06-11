import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import {
  CreatePost,
  Details,
  EditPost,
  Error,
  Feed,
  Auth,
} from "./pages/index";
import { loader as feedLoader } from "./pages/Feed";
import { loader as postDetailsLoader } from "./pages/Details";
import { action as createPostAction } from "./pages/CreatePost";
import { action as postDeleteInDetailsAction } from "./pages/Details";
import { action as postDeleteInFeedAction } from "./pages/Feed";
import { action as editPostAction } from "./pages/EditPost";
import { ToastContainer } from "react-toastify";
import { ConfirmDialog } from "primereact/confirmdialog";
const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    errorElement: <Error />,
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
      },
      {
        path: ":id",
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
          },
        ],
      },
      {
        path: "/auth",
        element: <Auth />,
      },
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
