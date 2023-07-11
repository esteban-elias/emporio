import { useState } from 'react';
import { Product } from '../../types';
import ProductForm from '../ProductForm/ProductForm';
import ProductTable from '../ProductTable/ProductTable';
import styles from './ProductPanel.module.css';

const data = [
  {
    id: crypto.randomUUID(),
    categoria: 'Tecnología',
    nombre: 'Monitor',
    precioNormal: 1000,
    precioOferta: 800,
  },
  {
    id: crypto.randomUUID(),
    categoria: 'Tecnología',
    nombre: 'Mouse',
    precioNormal: 100,
    precioOferta: null,
  },
];

const ProductPanel = () => {
  const [products, setProducts] = useState<Product[]>(data);

  const addProduct = (product: Product) => {
    setProducts((PrevProducts) => PrevProducts.concat(product));
  };

  return (
    <section className={styles.container}>
      <h1>Panel de Productos</h1>
      <ProductForm addProduct={addProduct} />
      <ProductTable products={products} />
    </section>
  );
};

export default ProductPanel;
