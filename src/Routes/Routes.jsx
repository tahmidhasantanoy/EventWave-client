import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import ViewProfile from "../pages/Authentication/ViewProfile";
import ProfileEdit from "../pages/Authentication/EditProfile";
import AddEvent from "../pages/Event/AddEvent";
import AllEvents from "../pages/Event/AllEvents";
import UpdateEvent from "../pages/Event/UpdateEvent";
import UpdateSingleEvent from "../pages/Event/UpdateSingleEvent";
import DetailEvent from "../pages/Event/DetailEvent";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/profile/:email",
        element: <ViewProfile />,
      },
      {
        path: "/edit-profile/:id",
        element: <ProfileEdit />,
        loader: ({ params }) => {
          return fetch(`http://localhost:3000/update-user-data/${params.id}`);
        },
      },
      {
        path: "/add-event",
        element: (
          <PrivateRoute>
            <AddEvent />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-events",
        element: <AllEvents />,
      },
      {
        path: "/update-event",
        element: <UpdateEvent />,
        loader: () => fetch(`http://localhost:3000/event-info`),
      },
      {
        // /update-single-event/${_id}
        path: "/update-single-event/:id",
        element: <UpdateSingleEvent />,
        loader: ({ params }) => {
          return fetch(`http://localhost:3000/get-single-event/${params.id}`);
        },
      },
      {
        path: "/detail-event/:id",
        element: (
          <PrivateRoute>
            <DetailEvent />
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:3000/get-single-event/${params.id}`);
        },
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
]);

export default router;
