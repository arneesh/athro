export const handleDecimal = (num, decimal) => {
  if (num) return Number(num).toFixed(decimal);
  return 0;
};
