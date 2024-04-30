import NotFound from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Catalog from 'pages/Catalog';
import Favorites from 'pages/Favorites';
import HomePage from 'pages/HomePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
