import { ProductFormActionType as Action } from './enums';

export type Product = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  categoria: string;
  nombre: string;
  precioNormal: number;
  precioOferta: number | null;
};

export type ProductTableProps = {
  products: Product[];
  updateProduct: (product: Product) => void;
  deleteProduct: (id: Product['id']) => void;
};

export type ProductRowProps = Product & {
  updateProduct: (product: Product) => void;
  deleteProduct: (id: Product['id']) => void;
};

export type ProductFormProps = {
  addProduct: (product: Product) => void;
};

export type ProductFormPayloadType = {
  name: keyof ProductFormState;
  value: string;
};

export type ProductFormAction =
  | {
      type: Action.ChangeInput;
      payload: ProductFormPayloadType;
    }
  | { type: Action.Reset };

export type ProductFormState = {
  categoria: string;
  nombre: string;
  precioNormal: number | '';
  precioOferta: number | '';
};

type ValidateForm = (params: ProductFormState) => Omit<Product, 'id'>;
