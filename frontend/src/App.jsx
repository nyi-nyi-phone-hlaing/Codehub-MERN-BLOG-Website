import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import { CreatePost, Details, EditPost, Error, Feed } from "./pages/index";
import { loader as feedLoader } from "./pages/Feed";
import { loader as postDetailsLoader } from "./pages/Details";
import { action as createPostActions } from "./pages/CreatePost";
import { action as postDeleteInDetailsActions } from "./pages/Details";
import { action as postDeleteInFeedActions } from "./pages/Feed";
import { action as editPostActions } from "./pages/EditPost";
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
        action: postDeleteInFeedActions,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostActions,
      },
      {
        path: ":id",
        id: "post-details",
        loader: postDetailsLoader,
        children: [
          {
            index: true,
            element: <Details />,
            action: postDeleteInDetailsActions,
          },
          {
            path: "edit-post",
            element: <EditPost />,
            action: editPostActions,
          },
        ],
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
