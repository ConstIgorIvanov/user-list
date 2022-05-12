const axios = require("axios");

export async function getUser() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
}
