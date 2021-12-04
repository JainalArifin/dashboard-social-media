// set production
const IS_PRODUCTION = process.env.NODE_ENV === "production";
const X_API_KEY = "ynFV0UIdfrBMPipO";
// set token
// let token = window.localStorage.getItem("authToken");

// // set base url for API based on MODE
let API_JSON_PLACEHOLDER = "https://jsonplaceholder.typicode.com";
let BASE_URL = "http://localhost:8001";

const initializers = {
  API_JSON_PLACEHOLDER,
  BASE_URL,
  X_API_KEY,
  IS_PRODUCTION,
};

export default initializers;
