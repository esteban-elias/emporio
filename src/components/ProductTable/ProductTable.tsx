import useProduct from '../../hooks/useProduct';
import styles from './ProductTable.module.css';
import { useState } from 'react';
import { ProductRowProps } from '../../types';
import { toCLP } from '../../utils/format';

const ProductTable = () => {
  const { products, updateProduct, deleteProduct } = useProduct();
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
          <option value="Tecnología">Tecnología</option>
          <option value="Ropa Hombre">Ropa Hombre</option>
          <option value="Ropa Mujer">Ropa Mujer</option>
          <option value="Joyería">Joyería</option>
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
        <button onClick={() => setIsEditing(false)}>Guardar</button>
      </td>
    </tr>
  ) : (
    <tr>
      <td>{categoria}</td>
      <td>{nombre}</td>
      <td>{toCLP(precioNormal)}</td>
      <td>{toCLP(precioOferta)}</td>
      <td>
        <button onClick={() => setIsEditing(true)}>Editar</button>
        <button onClick={() => deleteProduct(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default ProductTable;
