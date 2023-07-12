export const toCLP = (value: number | '') => {
  if (value === '') {
    return '';
  }
  const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'clp',
  });
  return formatter.format(value);
};
