import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./routes/MainLayout";
import Home from "./components/Home";
import Service from "./components/Service";
import Product from "./components/Product";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "Service",
          element: <Service />,
        },
        {
          path: "Product",
          element: <Product />,
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "Footer",
          element: <Footer />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
