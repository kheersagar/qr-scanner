import axios from "axios";
import { ticketActions } from "../store/TicketSlice";

const API = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000"
      : "https://ticket-backend-nur5.onrender.com",
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

export const getTicket = (id) => {
  return async (dispatch) => {
    try {
      const res = await API.get(`/api/getTicket/${id}`);
      dispatch(ticketActions.setData(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getTicketById = (id) => {
  return async (dispatch) => {
    try {
      const res = await API.get(`/api/getTicketById/${id}`);
      dispatch(ticketActions.setData(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};
