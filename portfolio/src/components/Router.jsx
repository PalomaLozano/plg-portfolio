/*import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './pages/Home';
import Web from './pages/Web';
import Design from './pages/Design';
import Photo from './pages/Photo';
import Contact from './pages/Contact';

const HeaderLayout = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/web',
        element: <Web />,
      },
      {
        path: '/design',
        element: <Design />,
      },

      {
        path: '/photo',
        element: <Photo />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export function App(props) {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}*/
