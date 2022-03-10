import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-c7725/us-central1/api", //The API URL {cloud_function}
});

export default instance;
