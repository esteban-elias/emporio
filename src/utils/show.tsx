import { Product } from "../types";
import { toCLP } from "./format";

export const showProductsByCategoria = (products: Product[], categoria: string) => {
  return products.map((product) => {
    if (product.categoria === categoria) {
      return (
        <li key={product.id}>
          {`${product.nombre} | ${toCLP(
            product.precioNormal
          )} | ${toCLP(product.precioOferta)}`}
        </li>
      );
    }
  });
};
