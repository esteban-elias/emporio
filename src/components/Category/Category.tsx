import useProduct from '../../hooks/useProduct';
import { CategoryProps } from '../../types';
import { showProductsByCategoria } from '../../utils/show';

const Category = ({ categoria }: CategoryProps) => {
  const { products } = useProduct();
  return (
    <main>
      <h1>{categoria}</h1>
      <section>
        <ul>{showProductsByCategoria(products, categoria)}</ul>
      </section>
    </main>
  );
};

export default Category;
