// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

function httpGet(url) {

    return fetch(url)   
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

// --call

httpGet('https://api.restful-api.dev/objects')
    .then(data => {
        console.log('Response Data:', data);
    })
    .catch(error => {
        console.error('Fetch Error:', error);
    });