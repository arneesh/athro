export const beautifyDate = date => {
  var dateItem = new Date(date)
    .toDateString()
    .split(' ')
    .slice(1)
    .join(' ');

  return dateItem;
};
