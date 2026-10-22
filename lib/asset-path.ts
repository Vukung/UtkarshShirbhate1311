
const BASE_PATH = "/UtkarshShirbhate1311";

export function assetPath(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // Local development uses the root; GitHub Pages uses the repo subpath.
  return process.env.NODE_ENV === "production"
    ? `${BASE_PATH}${normalizedPath}`
    : normalizedPath;
}
