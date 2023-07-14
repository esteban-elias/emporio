import usePage from '../../hooks/usePage';
import { Page } from '../../enums';

const Header = () => {
  const { setPage } = usePage();

  return (
    <>
      <header>
        <h1>Emporio</h1>
      </header>
      <nav>
        <button onClick={() => setPage(Page.Home)}>Home</button>
        <button onClick={() => setPage(Page.Tecnologia)}>
          Tecnología
        </button>
        <button onClick={() => setPage(Page.Joyeria)}>Joyería</button>
        <button onClick={() => setPage(Page.RopaHombre)}>
          Ropa Hombre
        </button>
        <button onClick={() => setPage(Page.RopaMujer)}>
          Ropa Mujer
        </button>
        <button onClick={() => setPage(Page.ProductAdminPanel)}>
          Product Admin Panel
        </button>
      </nav>
    </>
  );
};

export default Header;
