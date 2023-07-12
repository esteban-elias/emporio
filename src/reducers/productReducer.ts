import { ProductActionType as ActionType } from '../enums';
import { Product, ProductAction as Action} from '../types';

const data = [
  {
    id: crypto.randomUUID(),
    categoria: 'Tecnología',
    nombre: 'Monitor',
    precioNormal: 1000,
    precioOferta: 800,
  },
  {
    id: crypto.randomUUID(),
    categoria: 'Tecnología',
    nombre: 'Mouse',
    precioNormal: 100,
    precioOferta: null,
  },
];

// Adjust types for input elements
export const initialProducts: Product[] = data.map((product) => ({
  ...product,
  precioOferta: product.precioOferta ? product.precioOferta : '',
}));

export const productReducer = (products: Product[], action: Action) => {
  switch (action.type) {
    case ActionType.Add: {
      return [...products, action.payload];
    }
    case ActionType.Update: {
      return products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    }
    case ActionType.Delete: {
      return products.filter(
        (product) => product.id !== action.payload.id
      );
    }
    default: {
      throw new Error('Unknown action');
    }
  }
};
