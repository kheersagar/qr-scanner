import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import ticketSlice from "./TicketSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ticket: ticketSlice.reducer,
  },
});

export default store;
