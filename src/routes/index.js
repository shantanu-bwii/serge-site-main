import { Suspense } from "react";
import {  useRoutes, useLocation } from "react-router-dom";
// layouts
import Layout from "../layouts";
// components
import LoadingScreen from "../components/LoadingScreen";

//const HomePage = Loadable(lazy(() => import("../pages/HomePage")));
//const User = Loadable(lazy(() => import("../pages/User")));
//const Blog = Loadable(lazy(() => import("../pages/Blog")));
//const Page404 = Loadable(lazy(() => import("../pages/Page404")));

import HomePage from '../pages/HomePage';
import User from '../pages/User';
import Blog from '../pages/Blog';
import Page404 from '../pages/Page404'
// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  return ( 
    <Suspense
      fallback={<LoadingScreen isDashboard={pathname?.includes("/dashboard")} />}
      
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
   {       
   path: "/",
   element: <Layout />,
   errorElement: <Page404 />,
   children: [
      { element: <HomePage />, index: true },
      { element: <User />, path:`/user/:slug` },
      { element: <Blog />, path:`/blog/:slug` },
              ],     
      },  
      ]); 
}


// const PrivacyPage = Loadable(lazy(() => import("../pages/PrivacyPage")));
// const UseofCookiePage = Loadable(
//   lazy(() => import("../pages/UseofCookiePage"))
// );
