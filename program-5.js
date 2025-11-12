// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.
function fetchMultipleAPIs(urls) {

    const requests = urls.map(url =>
        fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}: ${response.status}`);
            }
            return response.json();
        })
    );

    return Promise.all(requests)
        .then(results => {
            return results;
        })
        .catch(error => {
            throw error;
        });
}

// --use


fetchMultipleAPIs([
    'https://api.restful-api.dev/objects',
    'https://api.restful-api.dev/objects',
    'https://api.restful-api.dev/objects'
])
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
