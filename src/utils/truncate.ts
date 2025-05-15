export function truncate(address: string, len = 4) {
  return `${address.slice(0, len)}…${address.slice(-len)}`;
}
