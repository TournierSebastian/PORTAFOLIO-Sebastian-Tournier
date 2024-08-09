import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import Home from './Components/Pages/Home/Home';
import { LeagueProvider } from './Components/Context/LeagueContext';
import { ThemeContext, ThemeProvider } from './Components/Context/ThemeContext';
import { useContext, useEffect } from 'react';
import ProjectsPage from './Components/Pages/ProjectsPage/ProjectsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/MyProjects",
    element: <ProjectsPage/>,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.className = theme === 'Dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);
  return (
    <div className={'App'}>
      <RouterProvider router={router} />
    </div>
  )
}

const App = () => (
  <ThemeProvider>
    <LeagueProvider>
      <AppContent />
    </LeagueProvider>
  </ThemeProvider>
);

export default App;
