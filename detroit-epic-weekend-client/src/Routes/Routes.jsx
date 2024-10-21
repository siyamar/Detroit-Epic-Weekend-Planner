import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import PlanYourTrip from "../pages/PlanYourTrip/PlanYourTrip";
import Bolg from "../pages/Blog/Bolg";
import Account from "../pages/Account/Account";
import Support from "../pages/Support/Support";
import Blog from "../pages/Blog/Bolg";
import BlogDetails from "../components/BlogDetails/BlogDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/planYourTrip',
            element: <PlanYourTrip></PlanYourTrip>
        },
        {
            path: '/blog',
            element: <Bolg></Bolg>
        },
        {
            path: '/blogDetails/:id',
            element: <BlogDetails></BlogDetails>
        },
        {
            path: '/account',
            element: <Account></Account>
        },
        {
            path: '/support',
            element: <Support></Support>
        },
      ]
    },
    
      ]
    )