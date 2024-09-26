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
import AllEventInDashboard from "../pages/Dashboard/AllEventInDashboard";
import DetailEventInDashboard from "../pages/Dashboard/DetailEventInDashboard";
import UpdateEventDashboard from "../pages/Dashboard/UpdateEventDashboard";

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
          return fetch(
            `https://event-wave-server-phi.vercel.app/update-user-data/${params.id}`
          );
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
        loader: () =>
          fetch(`https://event-wave-server-phi.vercel.app/event-info`),
      },
      {
        // /update-single-event/${_id}
        path: "/update-single-event/:id",
        element: <UpdateSingleEvent />,
        loader: ({ params }) => {
          return fetch(
            `https://event-wave-server-phi.vercel.app/get-single-event/${params.id}`,
            {
              method: "GET",
              headers: {
                authorization: `Bearer ${localStorage.getItem(
                  "EventWave-access-toke"
                )}`,
              },
            }
          );
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
          return fetch(
            `https://event-wave-server-phi.vercel.app/get-single-event/${params.id}`,
            {
              method: "GET",
              headers: {
                authorization: `Bearer ${localStorage.getItem(
                  "EventWave-access-toke"
                )}`,
              },
            }
          );
        },
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <private>
        <Dashboard />
      </private>
    ),
    children: [
      {
        path: "all-event/:qemail",
        element: <AllEventInDashboard />,
        loader: ({ params }) => {
          console.log(params.qemail);
          return fetch(
            `https://event-wave-server-phi.vercel.app/user-added-event/${params.qemail}`
          );
        },
      },
      {
        path: "detail-event-dashboard/:id",
        element: <DetailEventInDashboard />,
        loader: ({ params }) => {
          console.log(params.id);
          return fetch(
            `https://event-wave-server-phi.vercel.app/get-single-event/${params.id}`,
            {
              method: "GET",
              headers: {
                authorization: `Bearer ${localStorage.getItem(
                  "EventWave-access-toke"
                )}`,
              },
            }
          );
        },
      },
      {
        path: "dashboard-update-event/:qemail",
        element: <UpdateEventDashboard />,
        loader: ({ params }) => {
          console.log(params.qemail);
          return fetch(
            `https://event-wave-server-phi.vercel.app/user-added-event/${params.qemail}`
          );
        },
      },
    ],
  },
]);

export default router;
