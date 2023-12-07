import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  createHashRouter
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Services from "./components/Services/Services.jsx";
import AirFrieght from "./components/Services/AirFrieght.jsx";
import SeaFrieght from "./components/Services/SeaFrieght.jsx";
import LclConsolidation from "./components/Services/LclConsolidation.jsx";
import ProjectCargo from "./components/Services/ProjectCargo.jsx";
import CustomClearance from "./components/Services/CustomClearance.jsx";

import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" loader={Contact} element={<Contact />} />
      <Route path="service" element={<Services />} />
      <Route path="service/lcl" element={<LclConsolidation />} />
      <Route path="service/cargo" element={<ProjectCargo />} />
      <Route path="service/clerance" element={<CustomClearance />} />
      <Route path="service/sea" element={<SeaFrieght />} />
      <Route path="service/air" element={<AirFrieght />} />
      <Route path="user/:userid" element={<User />} />
      
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
