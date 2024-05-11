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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allJobs',
        element: <AllJobs></AllJobs>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/addJobs',
        element: <AddJobs></AddJobs>
      },
      {
        path: '/myJobs',
        element: <MyJobs></MyJobs>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/jobDetails',
        element: <JobDetails></JobDetails>
      },
      {
        path: '/updateJobs',
        element: <UpdateJobs></UpdateJobs>
      },
      {
        path: '/login',
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
