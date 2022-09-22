import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import EventImage from "../images/EventImage.png";
import IconOne from "../images/Icon.png";
import IconTwo from "../images/Icon1.png";
import EventDetailsCard from "../components/EventDetailsCard";

const EventDetailContainer = styled.div`
  background-color: #fbfaff;
  min-height: 100vh;
  padding: 184px 240px 300px;
  display: flex;
  justify-content: center;
  gap: 200px;

  .eventDetailBox {
    display: flex;
    gap: 65px;
    flex-direction: column;
    .eventDateLocation {
      display: flex;
      gap: 33px;
      flex-direction: column;
    }
    .eventDetails {
      display: flex;
      flex-direction: column;
      gap: 17px;
      .eventName {
        font-family: Helvetica;
        font-size: 48px;
        font-weight: 700;
        line-height: 55px;
        letter-spacing: 0px;
        text-align: left;
        color: #240d57;
      }
      .hostName {
        font-family: Helvetica;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        text-align: left;
        color: #828282;
        .change {
          font-weight: 700;
        }
      }
    }
  }
`;

const Event = () => {
  const Location = useLocation();
  const { eventName, hostName, startDate, endDate, location, eventPicture } =
    Location.state;
  console.log("LOCAITONS: ", Location);
  return (
    <EventDetailContainer>
      <div className="eventDetailBox">
        <div className="eventDetails">
          <div className="eventName">{eventName || "Birthday Bash"}</div>
          <div className="hostName">
            Hosted by <span className="change">{hostName || "Elysia"}</span>
          </div>
        </div>
        <div className="eventDateLocation">
          <EventDetailsCard
            iconImage={IconOne}
            title={startDate || "18 August 6:00PM"}
            text={endDate || "to 19 August 1:00PM UTC +10"}
          />
          <EventDetailsCard
            iconImage={IconTwo}
            title={location || "Street name"}
            text="Suburb, State, Postcode"
          />
        </div>
      </div>
      <div>
        <img src={eventPicture || EventImage} alt="eventimg" />
      </div>
    </EventDetailContainer>
  );
};

export default Event;
