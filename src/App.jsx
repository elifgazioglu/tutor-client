import Navbar from "./pages/components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./pages/components/footer/Footer";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import BecomeTutor from "./pages/becomeTutor/becomeTutor";
import TutorProfile from "./pages/tutorProfile/tutorProfile";
import Tutors from "./pages/tutors/Tutors";
import TutorsDetails from "./pages/tutorsDetails/TutorsDetails";
import Register from "./pages/register/Register";
import "./App.scss";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import TutorApplication from "./pages/tutorApplication/TutorApplication"

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/giris-yap",
          element: <Login />,
        },
        {
          path: "/kayit-ol",
          element: <Register />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/egitmen-ol",
          element: <BecomeTutor />,
        },
        {
          path: "/egitmen-profili",
          element: (
            <PrivateRoute>
              <TutorProfile></TutorProfile>
            </PrivateRoute>
          ),
        },
        {
          path: "/egitmenler",
          element: (
            <PrivateRoute>
              <Tutors></Tutors>
            </PrivateRoute>
          ),
        },
        {
          path: "/basvuru",
          element: (
            <PrivateRoute>
              <TutorApplication></TutorApplication>
            </PrivateRoute>
          ),
        },
        {
          path: "/egitmenler/:slug",
          element: (
            <PrivateRoute>
              <TutorsDetails></TutorsDetails>
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
