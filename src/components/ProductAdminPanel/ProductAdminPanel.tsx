import { ProductProvider } from "../../contexts/ProductProvider";
import ProductTable from "../ProductTable/ProductTable";

const ProductAdmin = () => {
  return (
    <ProductProvider>
      <ProductTable />
    </ProductProvider>
  );
};

export default ProductAdmin;
