import axios from "axios";

const API = axios.create({
  baseURL: "https://sih11.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  console.log(req);
  return req;
});

export const LoginHandle = (data, navigation) => {
  return async (dispatch) => {
    try {
      const res = await API.post("/api/signin", data);
      localStorage.setItem("/auth/info", JSON.stringify(res.data));
      navigation("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
};
