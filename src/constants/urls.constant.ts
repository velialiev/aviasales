const URLS = {
  ROOT: 'https://front-test.beta.aviasales.ru/',
  PICS_CDN: 'http://pics.avs.io/99/36/',
  PIC: (IATA: string) => `${URLS.PICS_CDN}${IATA}.png`,
  SEARCH: 'search',
  TICKETS: 'tickets',
};

export default URLS;
