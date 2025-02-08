import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./routes/layout/layout";
import HomePage from './routes/homePage/homePage';
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Register from "./routes/register/register";
import Login from "./routes/login/login"
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:
       <Layout/>,
       children:[
       {
        path:"/",
        element:<HomePage/>
       },
       {
        path:"/list",
        element:<ListPage/>
       },
       {
        path:"/:id",
        element:<SinglePage/>
       },
       {
        path:"/profile",
        element:<ProfilePage/>
       },{
        path:"/register",
        element:<Register/>
       },
       {
        path:"/login",
        element:<Login/>
       }
       ]
    }
  ]);
  return (
<RouterProvider router={router} />
  )
}

export default App
