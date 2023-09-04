import axios from "axios";
import qs from "qs";

const instance = axios.create({
  baseURL: "http://localhost:8080/app/api",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  transformRequest: [(data) => qs.stringify(data)],
});

export default instance;
