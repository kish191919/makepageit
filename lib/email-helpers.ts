export function formatAmount(amount: number, currency: string | null): string {
  const code = (currency ?? "usd").toUpperCase();
  const value = (amount / 100).toFixed(2);
  return `${value} ${code}`;
}

export function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
