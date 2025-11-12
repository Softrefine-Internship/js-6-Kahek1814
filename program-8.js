// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout); 

  try {
    console.log(`Fetching ${url} with a timeout of ${timeout / 1000} seconds...`);
    const response = await fetch(url, { signal: controller.signal });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetch successful!");
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error("Request timed out and was cancelled.");
    } else {
      console.error("Fetch failed:", error.message);
    }
    throw error;
  } finally {
    clearTimeout(timer); 
  }
}

fetchWithTimeout("https://api.restful-api.dev/objects")