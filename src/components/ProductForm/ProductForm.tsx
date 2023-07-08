import React, { useReducer } from 'react';
import { ProductFormReducerActionType as Action } from '../../enums';
import {
  ProductFormReducerActionPayload as Payload,
  Product,
  ProductFormProps as Props,
  ProductFormReducer as Reducer,
} from '../../types';
import styles from './ProductForm.module.css';

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case Action.ChangeInput:
      return {
        ...state,
        [action.payload!.name]: action.payload!.value,
      };
    case Action.Reset:
      return {
        categoria: '',
        nombre: '',
        precioNormal: '',
        precioOferta: '',
      };
    default:
      return state;
  }
};

const ProductForm: React.FC<Props> = ({ addProduct }) => {
  const [state, dispatch] = useReducer(reducer, {
    categoria: '',
    nombre: '',
    precioNormal: '',
    precioOferta: '',
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProduct({
      ...state,
      id: crypto.randomUUID(),
    } as Product);
    dispatch({ type: Action.Reset });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch({
      type: Action.ChangeInput,
      payload: {
        name: e.target.name,
        value: e.target.value,
      } as Payload,
    });
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2>Formulario (Crear/Editar)</h2>
      <label>
        Categoría
        <select
          name="categoria"
          value={state.categoria}
          onChange={handleChange}
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
          value={state.nombre}
          onChange={handleChange}
        />
      </label>
      <label>
        Precio Normal
        <input
          type="number"
          name="precioNormal"
          value={state.precioNormal}
          onChange={handleChange}
        />
      </label>
      <label>
        Precio Oferta
        <input
          type="number"
          name="precioOferta"
          value={state.precioOferta ? state.precioOferta : ''}
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
