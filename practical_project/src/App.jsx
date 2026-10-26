
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

import MainLayout from "./routes/MainLayout";
import AddEmployee from "./components/AddEmployee";
import Loading from "./ui/Loading";

const Employee = lazy(() => import("./components/Employee"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Employee />
          </Suspense>
        ),
      },
      {
        path: "add",
        element: <AddEmployee />,
      },
      {
        path: "update/:id",
        element: <AddEmployee />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
