import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTicket, getTicketById } from "../API/API";
import { useDispatch, useSelector } from "react-redux";
import "../styles/dashboard.css";

import { Button } from "react-bootstrap";
import { Form, InputGroup } from "react-bootstrap";

function Check() {
  const { data } = useSelector((state) => state.ticket);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const searchHandler = () => {
    dispatch(getTicketById(inputValue));
  };
  return (
    <div>
      <div className="input-sec">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Ticket Id"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={searchHandler}
          >
            Button
          </Button>
        </InputGroup>
      </div>
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
                        : `https://sih11.herokuapp.com/${data.monumentId?.img}`
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

export default Check;
