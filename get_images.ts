import * as https from 'https';

https.get('https://www.xgrass.com/players-series-putting-green-kits.html', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    while ((match = imgRegex.exec(data)) !== null) {
      const url = match[1].toLowerCase();
      if (url.includes('monterey') || url.includes('thb')) {
        console.log(match[1]);
      }
    }
  });
});
