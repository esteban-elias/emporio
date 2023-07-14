import usePage from '../hooks/usePage';
import { Page } from '../enums';
import Home from '../components/Home/Home';
import ProductAdminPanel from '../components/ProductAdminPanel/ProductAdminPanel';
import Category from '../components/Category/Category';

const Router = () => {
  const { page } = usePage();

  switch (page) {
    case Page.Home:
      return <Home />;
    case Page.ProductAdminPanel:
      return <ProductAdminPanel />;
    case Page.Tecnologia:
      return <Category categoria="Tecnología" />;
    case Page.Joyeria:
      return <Category categoria="Joyería" />;
    case Page.RopaHombre:
      return <Category categoria="Ropa Hombre" />;
    case Page.RopaMujer:
      return <Category categoria="Ropa Mujer" />;
    default:
      return <span>404 Not Found</span>;
  }
};

export default Router;
