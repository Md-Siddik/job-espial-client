import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.jsx';
import Main from './Layout/Main.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import AllJobs from './AllJobs/AllJobs.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import AppliedJobs from './AppliedJobs/AppliedJobs.jsx';
import AddJobs from './AddJobs/AddJobs.jsx';
import MyJobs from './MyJobs/MyJobs.jsx';
import Blogs from './Blogs/Blogs.jsx';
import JobDetails from './JobDetails/JobDetails.jsx';
import UpdateJobs from './UpdateJobs/UpdateJobs.jsx';
import Login from './Login/Login.jsx';
import SignUp from './SignUp/SignUp.jsx';
import PrivetRouter from './PrivetRouter/PrivetRouter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/allJobs')
      },
      {
        path: '/allJobs',
        element: <AllJobs></AllJobs>,
        loader: () => fetch('http://localhost:5000/allJobs')
      },
      {
        path: '/appliedJobs',
        element: <PrivetRouter><AppliedJobs></AppliedJobs></PrivetRouter>,
        loader: () => fetch(`http://localhost:5000/allJobs`)
      },
      {
        path: '/addJobs',
        element: <PrivetRouter><AddJobs></AddJobs></PrivetRouter>
      },
      {
        path: '/myJobs',
        element: <MyJobs></MyJobs>,
        loader: () => fetch(`http://localhost:5000/allJobs`)
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/jobDetails/:id',
        element: <PrivetRouter><JobDetails></JobDetails></PrivetRouter>,
        loader: ({params}) => fetch(`http://localhost:5000/allJobs/${params.id}`)
        // loader: () => fetch(`http://localhost:5000/allJobs`)
      },
      {
        path: '/updateJobs/:id',
        element: <PrivetRouter><UpdateJobs></UpdateJobs></PrivetRouter>,
        loader: ({params}) => fetch(`http://localhost:5000/allJobs/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
