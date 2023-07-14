import { createContext, useReducer } from 'react';
import { ProductActionType as ActionType } from '../enums';
import { productReducer } from '../reducers/productReducer';
import {
  Product,
  ProductContext as Context,
  ProductProviderProps as Props,
} from '../types';
import { validateProduct } from '../utils/validation';
import initialProducts from '../utils/initialProducts';

export const ProductContext = createContext<Context| null>(
  null
);

const useProductReducer = () => {
  const [products, dispatch] = useReducer(
    productReducer,
    initialProducts
  );

  const addProduct = (product: Product) => {
    validateProduct(product);
    dispatch({
      type: ActionType.Add,
      payload: product,
    });
  };

  const updateProduct = (product: Product) => {
    validateProduct(product)
    dispatch({
      type: ActionType.Update,
      payload: product,
    });
  };

  const deleteProduct = (id: Product['id']) => {
    dispatch({
      type: ActionType.Delete,
      payload: { id: id },
    });
  };

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
  };
};

export const ProductProvider = ({ children }: Props) => {
  const { products, addProduct, updateProduct, deleteProduct } =
    useProductReducer();
  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
