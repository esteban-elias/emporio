import { ProductActionType as ActionType } from '../enums';
import { Product, ProductAction as Action} from '../types';

export const productReducer = (products: Product[], action: Action) => {
  switch (action.type) {
    case ActionType.Add: {
      const newProducts = [...products, action.payload];
      newProducts.sort((a, b) => {
        if(a.categoria < b.categoria) { return -1; }
        if(a.categoria > b.categoria) { return 1; }
        return 0;
      });
      return newProducts;
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
