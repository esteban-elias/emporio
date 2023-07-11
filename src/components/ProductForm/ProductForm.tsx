import React from 'react';
import useProductForm from '../../hooks/useProductForm';
import {
  ProductFormState,
  ProductFormProps as Props,
} from '../../types';
import { validateForm } from '../../utils/validations/product-form';
import styles from './ProductForm.module.css';

const ProductForm: React.FC<Props> = ({ addProduct }) => {
  const {
    categoria,
    nombre,
    precioNormal,
    precioOferta,
    changeInput,
    reset,
  } = useProductForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const fields = validateForm({
        categoria: categoria,
        nombre: nombre,
        precioNormal: precioNormal,
        precioOferta: precioOferta,
      });
      addProduct({
        ...fields,
        id: crypto.randomUUID(),
      });
      reset();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    changeInput({
      name: e.target.name as keyof ProductFormState,
      value: e.target.value,
    });
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2>Formulario (Crear/Editar)</h2>
      <label>
        Categoría
        <select
          name="categoria"
          value={categoria}
          onChange={handleChange}
          required
        >
          <option value="">-</option>
          <option value="Tecnología">Tecnología</option>
          <option value="Ropa Hombre">Ropa Hombre</option>
          <option value="Ropa Mujer">Ropa Mujer</option>
          <option value="Joyería">Joyería</option>
        </select>
      </label>
      <label>
        Nombre
        <input
          name="nombre"
          value={nombre}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Precio Normal
        <input
          type="number"
          name="precioNormal"
          value={precioNormal}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Precio Oferta
        <input
          type="number"
          name="precioOferta"
          value={precioOferta}
          onChange={handleChange}
        />
      </label>
      <button className={styles.submitButton} type="submit">
        Aceptar
      </button>
    </form>
  );
};

export default ProductForm;
