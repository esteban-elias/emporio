import useProduct from '../../hooks/useProduct';
import { showProductsByCategoria } from '../../utils/show';

const Home = () => {
  const { products } = useProduct();

  return (
    <main>
      <h1>Productos Destacados</h1>
      <section>
        <ul>
          <li>
            Tecnología
            <ul>{showProductsByCategoria(products, 'Tecnología')}</ul>
          </li>
          <li>
            Joyería
            <ul>{showProductsByCategoria(products, 'Joyería')}</ul>
          </li>
          <li>
            Ropa Hombre
            <ul>{showProductsByCategoria(products, 'Ropa Hombre')}</ul>
          </li>
          <li>
            Ropa Mujer
            <ul>{showProductsByCategoria(products, 'Ropa Mujer')}</ul>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;