import { useState } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductTable from '../ProductTable/ProductTable';
import styles from './ProductPanel.module.css';
import { Product } from '../../types';

const data = [
  {
    id: crypto.randomUUID(),
    categoria: 'Tecnología',
    nombre: 'Monitor',
    precioNormal: 1000,
    precioOferta: 800,
    enOferta: true,
  },
  {
    id: crypto.randomUUID(),
    categoria: 'Tecnología',
    nombre: 'Mouse',
    precioNormal: 100,
    precioOferta: 100,
    enOferta: false,
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
      <ProductForm addProduct={addProduct}/>
      <ProductTable products={products} />
    </section>
  );
};

export default ProductPanel;
