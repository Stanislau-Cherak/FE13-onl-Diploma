export function dFormatter(milisecond: number): string {
  
  const time = new Date(milisecond);
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  
  return `${day}/${month}/${year}`
}