import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Catalog from 'pages/Catalog';
import Favorites from 'pages/Favorites';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
