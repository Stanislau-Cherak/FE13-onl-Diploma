export function dFormatter(second: number): string {
  const milisecond = 1000 * second;
  const time = new Date(milisecond);
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();

  return `${day}/${month}/${year}`
}