import detail from '../views/pages/detail';
import favorite from '../views/pages/favorite';
import home from '../views/pages/home';

const routes = {
  '/': home,
  '/detail/:id': detail,
  '/favorite': favorite,
};

export default routes;
