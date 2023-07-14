export const toCLP = (value: string) => {
  if (value === '') {
    return '';
  }
  const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'clp',
  });
  return formatter.format(Number(value));
};
