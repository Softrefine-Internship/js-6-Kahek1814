// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.
// Function that fetches data and retries on failure

async function fetchWithRetry(url, retries , delay) {

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`Attempt ${attempt} to fetch ${url}...`);
            const response = await fetch(url);


            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }


            const data = await response.json();
            console.log("Fetch successful!");
            return data;

        } catch (error) {
            console.warn(`Attempt ${attempt} failed: ${error.message}`);

            if (attempt < retries) {
                console.log(`Retrying in ${delay / 1000} seconds...`);
                await new Promise(res => setTimeout(res, delay));
                
            } else {
                console.error("All retry attempts failed.");
                throw error;
            }
        }
    }
}

fetchWithRetry('https://api.restful-api.dev/objects/1', 3, 1500)
  .then(data => console.log(data))
  .catch(error => console.error(error));

