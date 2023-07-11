import React from 'react';
import { ProductRowProps as Props } from '../../types';
import styles from './ProductRow.module.css';

const ProductRow: React.FC<Props> = ({
  categoria,
  nombre,
  precioNormal,
  precioOferta,
}) => {
  return (
    <tr className={styles.container}>
      <td>{categoria}</td>
      <td>{nombre}</td>
      <td>{precioNormal}</td>
      <td>{precioOferta}</td>
    </tr>
  );
};

export default ProductRow;
