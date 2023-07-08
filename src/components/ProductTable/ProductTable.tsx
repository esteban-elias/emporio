import React from 'react';
import { ProductTableProps as Props} from '../../types';
import ProductRow from '../ProductRow/ProductRow';
import styles from './ProductTable.module.css';

const ProductTable: React.FC<Props> = ({ products }) => {
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
          <th>En Oferta</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <ProductRow
              key={product.id}
              categoria={product.categoria}
              nombre={product.nombre}
              precioNormal={product.precioNormal}
              precioOferta={product.precioOferta}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
