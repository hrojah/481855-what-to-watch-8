export const getFormattedDate = (initialDate: string): string => {
  const currentDate = new Date(initialDate);
  const year : string = currentDate.getFullYear().toString();
  const month: string = currentDate.toLocaleString('en', { month: 'long' });
  const day: string = currentDate.getDate().toString();

  return `${month} ${day}, ${year}`;
};

export const getFormattedDatetime = (initialDate: string): string => {
  const currentDate = new Date(initialDate);
  const year : string = currentDate.toLocaleString('en', {year: 'numeric'});
  const month: string = currentDate.toLocaleString('en', {month: '2-digit'});
  const day: string = currentDate.toLocaleString('en', {day: '2-digit'});

  return `${year}-${month}-${day}`;
};
