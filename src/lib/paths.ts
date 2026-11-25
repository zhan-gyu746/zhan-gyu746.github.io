export function withBase(path = ""): string {
  if (/^https?:\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL;
  const cleaned = path.replace(/^\//, "");
  return `${base}${cleaned}`;
}
