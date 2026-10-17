import { escapeHTML } from "./links.js";
export { escapeHTML, digiUrl, destinationUrl, productHref } from "./links.js";

const cache = new Map();
const base = import.meta.env.BASE_URL;
function load(path) {
  if (!cache.has(path)) {
    cache.set(path, fetch(`${base}${path}`).then(r => {
      if (!r.ok) throw new Error(`Cannot load ${path}: ${r.status}`);
      return r.json();
    }).catch(error => { cache.delete(path); throw error; }));
  }
  return cache.get(path);
}
function prepare(value, images, key = '') {
  if (Array.isArray(value)) return value.map(item => prepare(item, images, key));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k,v]) => [k,prepare(v,images,k)]));
  if (typeof value !== 'string') return value;
  if (images[value]) return images[value].startsWith('data:') ? images[value] : `${base}${images[value]}`;
  if (['title','title_fa','title_en','description','caption'].includes(key)) return escapeHTML(value);
  return value;
}
export async function fetchAPI(file) {
  const [data, images] = await Promise.all([load(`api/${file}`), load('api/image-manifest.json')]);
  return prepare(data, images);
}
export function getDB() { return load('db.json'); }
