import { useRoutes } from 'react-router';

const routes = [];

const RouterProvider = () => {
  const pages = useRoutes(routes);
  return pages;
};

export default RouterProvider;
