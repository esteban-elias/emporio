import { toCLP } from '../../utils/format-currency';
import React, { useState } from 'react';
import {
  ProductRowProps as Props,
  ProductFormState,
} from '../../types';
import styles from './ProductRow.module.css';
import useProductForm from '../../hooks/useProductForm';

const ProductRow: React.FC<Props> = ({
  id,
  categoria,
  nombre,
  precioNormal,
  precioOferta,
  updateProduct,
  deleteProduct,
}) => {
  const [updateMode, setUpdateMode] = useState(false);
  const formState = useProductForm({
    categoria,
    nombre,
    precioNormal,
    precioOferta,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    formState.changeInput({
      name: e.target.name as keyof ProductFormState,
      value: e.target.value,
    });
  };

  const handleOnClickEditar = () => {
    if (!updateMode) {
      setUpdateMode((prevUpdateMode) => !prevUpdateMode);
      return;
    }
    try {
      updateProduct({
        id,
        nombre: formState.nombre,
        categoria: formState.categoria,
        precioNormal: formState.precioNormal,
        precioOferta: formState.precioOferta,
      });
      setUpdateMode((prevUpdateMode) => !prevUpdateMode);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const handleOnClickEliminar = () => {
    if (confirm(`Confirmar eliminación de ${nombre}?`)) {
      deleteProduct(id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOnClickEditar();
    }
  };

  return (
    <tr className={styles.container}>
      <td>
        {updateMode ? (
          <select
            name="categoria"
            value={formState.categoria}
            disabled={!updateMode}
            onChange={handleChange}
          >
            <option value="Tecnología">Tecnología</option>
            <option value="Ropa Hombre">Ropa Hombre</option>
            <option value="Ropa Mujer">Ropa Mujer</option>
            <option value="Joyería">Joyería</option>
          </select>
        ) : (
          <span>{formState.categoria}</span>
        )}
      </td>

      <td>
        {updateMode ? (
          <input
            name="nombre"
            value={formState.nombre}
            disabled={!updateMode}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <span>{formState.nombre}</span>
        )}
      </td>
      <td>
        {updateMode ? (
          <input
            name="precioNormal"
            value={formState.precioNormal}
            disabled={!updateMode}
            type="number"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <span>{toCLP(formState.precioNormal)}</span>
        )}
      </td>
      <td>
        {updateMode ? (
          <input
            name="precioOferta"
            value={formState.precioOferta}
            disabled={!updateMode}
            type="number"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <span>{toCLP(formState.precioOferta)}</span>
        )}
      </td>
      <td>
        <button onClick={handleOnClickEditar}>
          {updateMode ? 'Confirmar' : 'Editar'}
        </button>
        <button onClick={handleOnClickEliminar}>Eliminar</button>
      </td>
    </tr>
  );
};

export default ProductRow;
