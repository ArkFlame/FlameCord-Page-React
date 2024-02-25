export function getURL() {
  return process.env.NODE_ENV == 'production'
    ? 'https://flamecord.com/'
    : 'http://localhost:3000';
}
