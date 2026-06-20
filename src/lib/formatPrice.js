// Formats a number as a USD price string, e.g. 99 -> "$99"
export function formatPrice(value) {
  return `$${value.toLocaleString("en-US")}`;
}
