import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import { CreatePost, Details, EditPost, Error, Feed } from "./pages/index";
import { loader as feedLoader } from "./pages/Feed";
import { loader as postDetailsLoader } from "./pages/Details";
import { action as createPostActions } from "./pages/CreatePost";
const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Feed />, loader: feedLoader },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostActions,
      },
      {
        path: "/edit-post/:id",
        element: <EditPost />,
      },
      {
        path: "/view/post/:id",
        element: <Details />,
        loader: postDetailsLoader,
      },
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
