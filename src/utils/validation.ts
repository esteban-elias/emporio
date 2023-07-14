import { Product } from '../types';

export const validateProduct = ({
  categoria,
  nombre,
  precioNormal,
  precioOferta,
}: Product) => {
  if (categoria === '' || nombre === '' || precioNormal === '') {
    throw new Error('Campos categoría, nombre y precio normal son obligatorios');
  }
  if (Number(precioNormal) <= 0) {
    throw new Error('Los precios deben ser positivos');
  }
  if (Number(precioOferta) > Number(precioNormal)) {
    throw new Error(
      'El precio de oferta no puede ser mayor al precio normal'
    );
  }
};
