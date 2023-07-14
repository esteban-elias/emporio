import useProduct from '../../hooks/useProduct';
import styles from './ProductAdminPanel.module.css';
import { useState } from 'react';
import { Product, ProductRowProps } from '../../types';
import { toCLP } from '../../utils/format';

const CATEGORY_OPTIONS = [
  '',
  'Tecnología',
  'Ropa Hombre',
  'Ropa Mujer',
  'Joyería',
].map((category) => {
  return (
    <option key={category} value={category}>
      {category}
    </option>
  );
});

const initialStateNewProduct: Omit<Product, 'id'> = {
  categoria: '',
  nombre: '',
  precioNormal: '',
  precioOferta: '',
};

const ProductAdminPanel = () => {
  const { products, addProduct, updateProduct, deleteProduct } =
    useProduct();

  const [newProduct, setNewProduct] = useState(initialStateNewProduct);

  const handleOnClickAgregar = () => {
    try {
      addProduct({ ...newProduct, id: crypto.randomUUID() });
      setNewProduct(initialStateNewProduct);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th colSpan={5}>Productos</th>
        </tr>
        <tr>
          <th>Categoría</th>
          <th>Nombre</th>
          <th>Precio Normal</th>
          <th>Precio Oferta</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <select
              name="categoria"
              value={newProduct.categoria}
              onChange={handleChange}
            >
              {CATEGORY_OPTIONS}
            </select>
          </td>
          <td>
            <input
              name="nombre"
              value={newProduct.nombre}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="number"
              name="precioNormal"
              value={newProduct.precioNormal}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="number"
              name="precioOferta"
              value={newProduct.precioOferta}
              onChange={handleChange}
            />
          </td>
          <td>
            <button onClick={handleOnClickAgregar}>Agregar</button>
          </td>
        </tr>
        {products.map((product) => {
          return (
            <ProductRow
              key={product.id}
              updateProduct={updateProduct}
              deleteProduct={deleteProduct}
              product={product}
            />
          );
        })}
      </tbody>
    </table>
  );
};

const ProductRow = ({
  product,
  updateProduct,
  deleteProduct,
}: ProductRowProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

  const handleOnClickGuardar = () => {
    try {
      updateProduct(editedProduct);
      setIsEditing(false);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const handleOnClickCancelar = () => {
    setEditedProduct(product);
    setIsEditing(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEditedProduct((prevEditedProduct) => ({
      ...prevEditedProduct,
      [e.target.name]: e.target.value,
    }));
  };

  return isEditing ? (
    <tr>
      <td>
        <select
          name="categoria"
          value={editedProduct.categoria}
          onChange={handleChange}
        >
          {CATEGORY_OPTIONS}
        </select>
      </td>
      <td>
        <input
          name="nombre"
          value={editedProduct.nombre}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="precioNormal"
          value={editedProduct.precioNormal}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="precioOferta"
          value={editedProduct.precioOferta}
          onChange={handleChange}
        />
      </td>
      <td>
        <button type="button" onClick={handleOnClickGuardar}>
          Guardar
        </button>
        <button type="button" onClick={handleOnClickCancelar}>
          Cancelar
        </button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{product.categoria}</td>
      <td>{product.nombre}</td>
      <td>{toCLP(product.precioNormal)}</td>
      <td>{toCLP(product.precioOferta)}</td>
      <td>
        <button type="button" onClick={() => setIsEditing(true)}>
          Editar
        </button>
        <button type="button" onClick={() => deleteProduct(product.id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ProductAdminPanel;
