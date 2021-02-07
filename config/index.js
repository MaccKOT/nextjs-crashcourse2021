const dev = process.env.NODE_ENV !== 'production';

//next.js doesn`t support relative paths, so we need provide absolute paths for properly work
export const server = dev
  ? 'http://localhost:3000'
  : 'https://our_production_site.com';
