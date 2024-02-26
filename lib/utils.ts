export function getURL() {
  return process.env.NODE_ENV == 'production'
    ? 'https://flame-cord-page-react.vercel.app/'
    : 'http://localhost:3000';
}
