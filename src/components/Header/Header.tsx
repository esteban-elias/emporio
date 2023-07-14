import usePage from '../../hooks/usePage';
import { Page } from '../../enums';

const Header = () => {
  const { page, setPage } = usePage();

  return (
    <header>
      <button onClick={() => setPage(Page.Home)}>Home</button>
      <button onClick={() => setPage(Page.ProductAdminPanel)}>
        Product Admin Panel
      </button>
    </header>
  );
};

export default Header;
