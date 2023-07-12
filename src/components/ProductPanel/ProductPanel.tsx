import { useState } from 'react';
import { Product } from '../../types';
import ProductForm from '../ProductForm/ProductForm';
import ProductTable from '../ProductTable/ProductTable';
import styles from './ProductPanel.module.css';
import {validateProduct} from '../../utils/validations/product-form';

const rawData = [
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

const data: Product[] = rawData.map((product) => ({
  ...product,
  precioOferta: product.precioOferta ? product.precioOferta : '',
}));

const ProductPanel = () => {
  const [products, setProducts] = useState(data);

  const addProduct = (product: Product) => {
    validateProduct(product)
    setProducts((prevProducts) => prevProducts.concat(product));
  };

  const updateProduct = (product: Product) => {
    validateProduct(product)
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === product.id ? product : prevProduct
      )
    );
  };

  const deleteProduct = (id: Product['id']) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <section className={styles.container}>
      <h1>Panel de Productos</h1>
      <ProductForm addProduct={addProduct} />
      <ProductTable
        products={products}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
      />
    </section>
  );
};

export default ProductPanel;
