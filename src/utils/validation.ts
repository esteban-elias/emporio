import { Product } from '../types';

export const validateProduct = ({
  categoria,
  nombre,
  precioNormal,
  precioOferta,
}: Product) => {
  if (categoria === '' || nombre === '' || precioNormal === '') {
    throw new Error('Todos los campos son obligatorios');
  }
  if (precioNormal <= 0) {
    throw new Error('Los precios deben ser positivos');
  }
  if (Number(precioOferta) > precioNormal) {
    throw new Error(
      'El precio de oferta no puede ser mayor al precio normal'
    );
  }
  if (isNaN(Number(precioNormal)) || isNaN(Number(precioOferta))) {
    throw new Error('Los precios deben ser números');
  }
};
