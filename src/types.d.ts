import { ProductFormReducerActionType } from './enums';

export type Product = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  categoria: string;
  nombre: string;
  precioNormal: number;
  precioOferta: number;
  enOferta: boolean;
};

export type ProductTableProps = {
  products: Product[];
};

export type ProductRowProps = Omit<Product, 'id'>;

export type ProductFormProps = {
  addProduct: (product: Product) => void;
};

export type ProductFormReducerState = Omit<Product, 'id'>;


export type ProductFormReducerActionPayload = {
  name: keyof ProductFormReducerState;
  value?: string | number | boolean;
  checked?: boolean;
};

export type ProductFormReducerAction = {
  type: ProductFormReducerActionType;
  payload?: ProductFormReducerActionPayload;
};

export type ProductFormReducer = (
  state: ProductFormReducerState,
  action: ProductFormReducerAction
) => ProductFormReducerState;
