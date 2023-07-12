import { useReducer } from 'react';
import { ProductFormActionType as Action } from '../enums';
import {
  ProductFormPayloadType as Payload,
  ProductFormAction,
  ProductFormState,
} from '../types';

const reducer = (
  state: ProductFormState,
  action: ProductFormAction
): ProductFormState => {
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

const useProductForm = (initialState: ProductFormState) => {
  const [{ categoria, nombre, precioNormal, precioOferta }, dispatch] =
    useReducer(reducer, initialState);

  const changeInput = (payload: Payload) => {
    dispatch({
      type: Action.ChangeInput,
      payload,
    });
  };

  const reset = () => {
    dispatch({
      type: Action.Reset,
    });
  };

  return {
    categoria,
    nombre,
    precioNormal,
    precioOferta,
    changeInput,
    reset,
  };
};

export default useProductForm;
