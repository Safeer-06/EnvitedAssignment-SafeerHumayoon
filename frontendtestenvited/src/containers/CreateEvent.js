import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const CreateEventContainer = styled.div`
  background-color: #f6f2ff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  }
`;

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
    hostName: "",
    startDate: "",
    endDate: "",
    location: "",
    eventPicture: "",
  });
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const value =
      e.target.type === "file"
        ? URL.createObjectURL(e.target.files[0])
        : e.target.value;
    setEventData({
      ...eventData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = () => {
    const isValid = Object.values(eventData).every((v) => Boolean(v));
    if (!isValid) message.error("Please fill the form");
    else Navigate("/event", { state: { ...eventData } });
  };

  console.log("Event data: ", eventData);

  return (
    <CreateEventContainer>
      <h1 className="heading">
        Create An <span className="text-highlighted">Event</span>
      </h1>
      <Input
        name="eventName"
        placeholder="Event name"
        onChange={handleChange}
      />
      <Input name="hostName" placeholder="Host name" onChange={handleChange} />
      <Input
        name="startDate"
        placeholder="Start date(MM/DD/YYYY)"
        onChange={handleChange}
      />
      <Input
        name="endDate"
        placeholder="End date(MM/DD/YYYY)"
        onChange={handleChange}
      />
      <Input name="location" placeholder="Location" onChange={handleChange} />
      <div>
        <div>Event Photo: </div>
        <Input name="eventPicture" type="file" onChange={handleChange} />
      </div>
      <Button onClick={handleSubmit}>Next</Button>
    </CreateEventContainer>
  );
};
export default CreateEvent;
