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
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export const App = () => {
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

  return <RouterProvider router={router} />;
};
