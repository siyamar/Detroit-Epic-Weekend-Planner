import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import PlanYourTrip from "../pages/PlanYourTrip/PlanYourTrip";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch("https://keto-diet-server.vercel.app/postBlogs"),
        },
        {
            path: '/planYourTrip',
            element: <PlanYourTrip></PlanYourTrip>
        },
      ]
    },
    
      ]
    )