import styled from "styled-components";
import EventCard from "../images/card.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const LandingContainer = styled.div`
  background-color: #f6f2ff;
  min-height: 100vh;
  padding: 90px 170px 140px;
  .eventContainer {
    display: flex;
    gap: 236px;
    justify-content: center;
    align-items: center;
  }
  .landingtag {
    display: flex;
    flex-direction: column;
    gap: 83px;
    text-align: right;
    .tagsContainer {
      display: flex;
      flex-direction: column;
      gap: 16px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
  .description {
    font-family: Helvetica;
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
    text-align: right;
    color: #4f4f4f;
  }
`;

const LandingComponent = () => {
  const Navigate = useNavigate();
  return (
    <LandingContainer>
      <div className="eventContainer">
        <div>
          <img src={EventCard} alt="landing" />
        </div>
        <div className="landingtag">
          <div>
            <div className="tagsContainer heading">
              <div>
                <div>Imagine if</div>
                <div className="text-highlighted">Snapchat</div>
                <div>had events.</div>
              </div>
              <div className="description">
                Easily host and share events with your friends <br />
                across any social media.
              </div>
            </div>
          </div>
          <div>
            <Button onClick={() => Navigate("/create")}>
              🎉 Create my event
            </Button>
          </div>
        </div>
      </div>
    </LandingContainer>
  );
};

export default LandingComponent;
