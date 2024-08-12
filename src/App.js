import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import Home from './Components/Pages/Home/Home';
import { LeagueProvider } from './Components/Context/LeagueContext';
import { ThemeContext, ThemeProvider } from './Components/Context/ThemeContext';
import { useContext, useEffect, useState } from 'react';
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
  const [backgroundClass, setBackgroundClass] = useState();

  useEffect(() => {
    document.body.className = theme === 'Dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  const changeBackground = (className) => {
    setBackgroundClass(className);
  };

  useEffect(() => {
    document.body.classList.add(backgroundClass);
    return () => {
      document.body.classList.remove(backgroundClass);
    };
  }, [backgroundClass]);

  return (
    <div className={'App'}>
      <RouterProvider router={router} />
      <button onClick={() => changeBackground('background-1')}>Background 1</button>
      <button onClick={() => changeBackground('background-2')}>Background 2</button>
      <button onClick={() => changeBackground('background-3')}>background 3</button>
      <button onClick={() => changeBackground('background-4')}>background 4</button>
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
