import useProduct from '../../hooks/useProduct';
import styles from './ProductTable.module.css';
import { useState } from 'react';
import { Product, ProductRowProps } from '../../types';
import { toCLP } from '../../utils/format';

const CATEGORY_OPTIONS = [
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

const ProductTable = () => {
  const { products, addProduct, updateProduct, deleteProduct } =
    useProduct();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const product = Object.fromEntries(formData.entries());
    try {
      addProduct({ ...product, id: crypto.randomUUID() } as Product);
      form.reset();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} id='add-product'></form>
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
                <select name="categoria" form='add-product'>{CATEGORY_OPTIONS}</select>
              </td>
              <td>
                <input name="nombre" form='add-product'/>
              </td>
              <td>
                <input type="number" name="precioNormal" form='add-product'/>
              </td>
              <td>
                <input type="number" name="precioOferta" form='add-product'/>
              </td>
              <td>
                <button form='add-product'>Agregar</button>
              </td>
            </tr>
            {products.map((product) => {
              return (
                <ProductRow
                  key={product.id}
                  updateProduct={updateProduct}
                  deleteProduct={deleteProduct}
                  {...product}
                />
              );
            })}
          </tbody>
        </table>
    </>
  );
};

const ProductRow = ({
  id,
  categoria,
  nombre,
  precioNormal,
  precioOferta,
  updateProduct,
  deleteProduct,
}: ProductRowProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    try {
      updateProduct({
        id,
        categoria,
        nombre,
        precioNormal,
        precioOferta,
        [e.target.name]: e.target.value,
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return isEditing ? (
    <tr>
      <td>
        <select
          name="categoria"
          value={categoria}
          onChange={handleChange}
        >
          {CATEGORY_OPTIONS}
        </select>
      </td>
      <td>
        <input name="nombre" value={nombre} onChange={handleChange} />
      </td>
      <td>
        <input
          type="number"
          name="precioNormal"
          value={precioNormal}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="precioOferta"
          value={precioOferta}
          onChange={handleChange}
        />
      </td>
      <td>
        <button type="button" onClick={() => setIsEditing(false)}>
          Guardar
        </button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{categoria}</td>
      <td>{nombre}</td>
      <td>{toCLP(precioNormal)}</td>
      <td>{toCLP(precioOferta)}</td>
      <td>
        <button type="button" onClick={() => setIsEditing(true)}>
          Editar
        </button>
        <button type="button" onClick={() => deleteProduct(id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ProductTable;
