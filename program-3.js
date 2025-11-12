//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

function downloadAll(urls) {
  const requests = urls.map(url =>
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${url}: ${response.status}`);
        }
        return response.text();
      })
  );
  
  return Promise.all(requests);
}

downloadAll([
  'https://api.restful-api.dev/objects',
  'https://api.restful-api.dev/objects',
  'https://api.restful-api.dev/objects'
])
