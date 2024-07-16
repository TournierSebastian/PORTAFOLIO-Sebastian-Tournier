import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import Home from './Components/Pages/Home/Home';
import { LeagueProvider } from './Components/Context/LeagueContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
])
const AppContent = () => {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}


const App = () => (
  <LeagueProvider>
  <AppContent/>
  </LeagueProvider>
);

export default App;
