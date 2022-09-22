import React from "react";
import RightArrow from "../images/rightArrow.png";
import styled from "styled-components";

const EventCardContainer = styled.div`
  padding: 8px;
  width: 446px;
  display: flex;
  align-items: center;
  gap: 20px;
  .details {
    flex-grow: 1;
    .title {
      font-family: Helvetica;
      font-size: 18px;
      font-weight: 700;
      line-height: 21px;
      color: #240d57;
    }
    .text {
        font-family: Helvetica;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        color: #4F4F4F;
    }
  }
`;

const EventDetailsCard = ({ iconImage, title, text }) => {
  return (
    <EventCardContainer>
      <div>
        <img src={iconImage} alt="cardIcon" />
      </div>
      <div className="details">
        <div className="title">{title}</div>
        <div className="text">{text}</div>
      </div>
      <div>
        <img src={RightArrow} alt="arrow" />
      </div>
    </EventCardContainer>
  );
};

export default EventDetailsCard;
