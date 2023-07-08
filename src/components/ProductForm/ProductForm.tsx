import React, { useReducer } from 'react';
import { ProductFormReducerActionType as ActionType } from '../../enums';
import {
  ProductFormReducerActionPayload as Payload,
  Product,
  ProductFormProps as Props,
  ProductFormReducer as Reducer,
} from '../../types';
import styles from './ProductForm.module.css';

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case ActionType.ChangeInput:
      if (Object.values(action.payload!).includes('enOferta')) {
        return {
          ...state,
          [action.payload!.name]: action.payload!.checked,
        };
      }
      return {
        ...state,
        [action.payload!.name]: action.payload!.value,
      };
    case ActionType.Reset:
      return {
        categoria: '',
        nombre: '',
        precioNormal: 0,
        enOferta: false,
        precioOferta: 0,
      };
    default:
      return state;
  }
};

const initialValue = {
  categoria: '',
  nombre: '',
  precioNormal: 0,
  enOferta: false,
  precioOferta: 0,
};

const ProductForm: React.FC<Props> = ({ addProduct }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProduct({
      ...state,
      id: crypto.randomUUID(),
    } as Product);
    dispatch({ type: ActionType.Reset });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.name === 'enOferta' && e.target instanceof HTMLInputElement) {
      dispatch({
        type: ActionType.ChangeInput,
        payload: {
          name: e.target.name,
          checked: e.target.checked,
        } as Payload,
      });
      return;
    }
    dispatch({
      type: ActionType.ChangeInput,
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
          value={state.precioNormal === 0 ? '' : state.precioNormal}
          onChange={handleChange}
        />
      </label>
      <label>
        En Oferta
        <input
          type="checkbox"
          name="enOferta"
          checked={state.enOferta}
          onChange={handleChange}
        />
      </label>
      <label>
        Precio Oferta
        <input
          type="number"
          name="precioOferta"
          disabled={!state.enOferta}
          value={state.precioOferta === 0 ? '' : state.precioOferta}
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
