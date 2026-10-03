import { safeArray, safeText } from './http.js';

const COUNTRIES = new Set(['India','USA','UK','Brazil','China','Russia','Mexico','Japan','Germany','Argentina']);
const DOMAINS = new Set(['animal','bird','both']);
const TYPES = new Set(['Vet','Rescuer','Shelter','Shop']);

export function normalizeContact(input = {}, { requireName = true } = {}) {
  const name = safeText(input.name, 180);
  const country = safeText(input.country, 80);
  const domain = safeText(input.domain, 20).toLowerCase();
  const type = safeText(input.type, 30);
  const city = safeText(input.city, 120);
  const state = safeText(input.state, 120);
  const address = safeText(input.address, 500);
  const phones = safeArray(input.phones, 4, 60);
  const services = safeArray(input.services, 18, 120);
  const email = safeText(input.email, 180);
  const website = safeText(input.website || input.source, 500);
  const source = safeText(input.source || input.website, 500);
  if (requireName && !name) throw new Error('Name / organisation is required.');
  if (!COUNTRIES.has(country)) throw new Error('Unsupported country.');
  if (!DOMAINS.has(domain)) throw new Error('Invalid directory type.');
  if (!TYPES.has(type)) throw new Error('Invalid contact category.');
  if (!city && !input.national) throw new Error('City is required for non-national records.');
  if (!address) throw new Error('Address or service area is required.');
  return {
    country, domain, type, name, state, city, phones, address, email, website, source,
    open24: Boolean(input.open24), services, national: Boolean(input.national),
  };
}
