import { ReactNode } from 'react';
import { ProductActionType, Page } from './enums';

export type Product = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  categoria: string;
  nombre: string;
  precioNormal: string;
  precioOferta: string;
};

export type ProductTableProps = {
  products: Product[];
  updateProduct: (product: Product) => void;
  deleteProduct: (id: Product['id']) => void;
};

export type ProductRowProps = {
  updateProduct: (product: Product) => void;
  deleteProduct: (id: Product['id']) => void;
  product: Product;
};

export type ProductFormProps = {
  addProduct: (product: Product) => void;
};

export type ProductPayload = {
  name: keyof ProductFormState;
  value: string;
};

export type ProductAction =
  | {
      type: ProductActionType.Add | ProductActionType.Update;
      payload: Product;
    }
  | { type: ProductActionType.Delete; payload: Pick<Product, 'id'> };

export type ProductContext = {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: Product['id']) => void;
};

export type ProviderProps = {
  children: ReactNode;
};

export type PageContext = {
  page: Page;
  setPage: (page: Page) => void;
}
