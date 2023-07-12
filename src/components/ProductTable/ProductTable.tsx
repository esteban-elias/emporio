import React from 'react';
import { ProductTableProps as Props } from '../../types';
import ProductRow from '../ProductRow/ProductRow';
import styles from './ProductTable.module.css';

const ProductTable: React.FC<Props> = ({ products, updateProduct, deleteProduct }) => {
  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th colSpan={5}>Listado de Productos</th>
        </tr>
        <tr>
          <th>Categoría</th>
          <th>Nombre</th>
          <th>Precio Normal</th>
          <th>Precio Oferta</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <ProductRow
              key={product.id}
              id={product.id}
              categoria={product.categoria}
              nombre={product.nombre}
              precioNormal={product.precioNormal}
              precioOferta={product.precioOferta}
              updateProduct={updateProduct}
              deleteProduct={deleteProduct}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
