import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Detail from "./pages/Detail";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/search-result",
    element: <SearchResult />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
