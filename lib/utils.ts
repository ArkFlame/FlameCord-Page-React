export function getURL() {
  return process.env.NODE_ENV == 'production'
    ? 'https://flamecord-page.vercel.app/'
    : 'http://localhost:3000';
}
