import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { ErrorPage } from './components/ErrorPage';
import { MainLayout } from './components/MainLayout';
import { MyModal } from './components/MyModal';
import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

const App = () => {
  const [theme, setTheme] = useState<string>('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    console.log(theme);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={<MainPage />}
          loader={() => {
            return redirect('/page/1');
          }}
        />
        <Route path="/page/:page" element={<MainPage />}>
          <Route path="/page/:page/details/:name" element={<MyModal />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

export default App;
