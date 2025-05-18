import React from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Login from './Pages/auth/Login';
import Signup from './Pages/auth/Signup';
import Footer from './components/Footer';
import Profile from './Pages/Profile';
import Admin from './Pages/admin/Admin';
import Dashboard from './Pages/admin/Dashboard';
import Course from './Pages/admin/Course';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home/></>,
  },
  {
    path: "/courses",
    element: <><Navbar/><Courses/></>,
  },
  {
    path: "/login",
    element: <><Navbar/><Login/></>
  },
  {
    path: "/signup",
    element: <><Navbar/><Signup/></>
  },
  {
    path: "/profile",
    element: <><Navbar/><Profile/></>
  },
  {
    path: "/admin",
    element: <><Navbar/><Admin/></>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard/>
      },
      {
        path: "course",
        element: <Course/>
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}

export default App