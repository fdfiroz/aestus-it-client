import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage"
import App from "../App"
import Home from "../pages/Home"
import ContactUs from "../pages/ContactUs"
// import Login from "../pages/Login"
// import Register from "../pages/Register"
// import DashboardLayout from "../layout/DashboardLayout"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: "*",
                element:<ErrorPage/>,
            },
            {
                index: true,
                element: <Home />,
            },
            {
              path: '/contact-us',
              element: <ContactUs />,
            },
            // {
            //   path: '/dashboard',
            //   element: <DashboardLayout />,
            //   children: [
               
            //   ]
            // }
              
        ]
    },
    // {
    //     path: '/login',
    //     element: <Login />,
    //   },
    //   {
    //     path: '/register',
    //     element: <Register />,
    //   },
])

export default routes