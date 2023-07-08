import { ProductFormReducerActionType } from './enums';

export type Product = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  categoria: string;
  nombre: string;
  precioNormal: number;
  precioOferta: number | null;
};

export type ProductTableProps = {
  products: Product[];
};

export type ProductRowProps = Omit<Product, 'id'>;

export type ProductFormProps = {
  addProduct: (product: Product) => void;
};

type OriginalOrEmptyString<T> = {
  [P in keyof T]: T[P] | '';
};

export type ProductFormReducerState = OriginalOrEmptyString<
  Omit<Product, 'id'>
>;

export type ProductFormReducerActionPayload = {
  name: keyof ProductFormReducerState;
  value: string | number | boolean;
};

export type ProductFormReducerAction = {
  type: ProductFormReducerActionType;
  payload?: ProductFormReducerActionPayload;
};

export type ProductFormReducer = (
  state: ProductFormReducerState,
  action: ProductFormReducerAction
) => ProductFormReducerState;
