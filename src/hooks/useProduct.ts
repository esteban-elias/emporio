import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductProvider';

const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};

export default useProduct;

// const useProductForm = (initialState: ProductFormState) => {
//   const [{ categoria, nombre, precioNormal, precioOferta }, dispatch] =
//     useReducer(reducer, initialState);

//   const changeInput = (payload: Payload) => {
//     dispatch({
//       type: Action.ChangeInput,
//       payload,
//     });
//   };

//   const reset = () => {
//     dispatch({
//       type: Action.Reset,
//     });
//   };

//   return {
//     categoria,
//     nombre,
//     precioNormal,
//     precioOferta,
//     changeInput,
//     reset,
//   };
// };

// export default useProductForm;
