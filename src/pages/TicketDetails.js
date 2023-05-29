import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTicket } from "../API/API";
import { useDispatch, useSelector } from "react-redux";

import "../styles/TicketDetails.css";
function TicketDetails() {
  const { data } = useSelector((state) => state.ticket);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTicket(id));
  }, []);
  return (
    <div>
      <div className="user-detail-cont">
        <h1>{data?.monumentId?.name}</h1>
        {data.length !== 0 ? (
          data.ticketedUsers?.map((item) => {
            return (
              <div className="user-info">
                <div className="img-sec">
                  <img
                    src={
                      process.env.NODE_ENV === "development"
                        ? `http://localhost:8000/${data.monumentId?.img}`
                        : `https://ticket-backend-nur5.onrender.com/${data.monumentId?.img}`
                    }
                    className="ticket-verif-image"
                  />
                </div>
                <div className="details-sec">
                  <div>name : {item.name} </div>
                  <div>age : {item.age} </div>
                  <div>Gender : {item.gender} </div>
                  <div>Nationality : {item.nationality} </div>
                  <div>ID Card No. : {item.idNumber} </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Ticket found</h1>
        )}
      </div>
    </div>
  );
}

export default TicketDetails;
