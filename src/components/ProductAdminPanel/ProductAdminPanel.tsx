import { ProductProvider } from "../../contexts/ProductProvider";
import ProductTable from "../ProductTable/ProductTable";

const ProductAdminPanel = () => {
  return (
    <ProductProvider>
      <ProductTable />
    </ProductProvider>
  );
};

export default ProductAdminPanel;
