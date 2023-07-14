import { Page } from '../../enums';
import usePage from '../../hooks/usePage';
import ProductAdminPanel from '../ProductAdminPanel/ProductAdminPanel';

const Home = () => {
  const { page } = usePage();

  const home = (
    <div>
      <h1>Home</h1>
      <p>Current page is Home</p>
    </div>
  );

  switch (page) {
    case Page.Home:
      return home;
    case Page.ProductAdminPanel:
      return <ProductAdminPanel/>;
    default:
      return home;
  }

};

export default Home;
