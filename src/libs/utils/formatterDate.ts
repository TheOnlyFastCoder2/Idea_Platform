export const datePattern = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/;

export  function fromTimestamp (timestamp: number) {
  const date = new Date(timestamp);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export function toTimestamp(dateString: string) {
  if (datePattern.test(dateString)) {
    const [day, month, year] = dateString.split('.').map(Number);
    const date = new Date(year, month - 1, day);
    return date.getTime();
  } else {
    return false;
  }
}

