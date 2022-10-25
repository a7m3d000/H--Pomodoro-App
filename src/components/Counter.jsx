// Packages & Frameworks
import styled from "styled-components";

// Styles
const Parent = styled.article`
  position: relative;
  border-radius: 50%;

  .pause {
    color: #dae1ff;
    font-size: 1rem;
    position: absolute;
    left: 53%;
    transform: translateX(-50%);
    letter-spacing: 15px;
    bottom: 85px;
    font-weight: 450;
  }

  .result {
    color: #dae1ff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 75px;
    font-weight: 900;
    font-family: "Josefin Sans";
    font-size: 4.7rem;
  }

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background-color: #151932;
    z-index: -1;
    border-radius: 50%;
  }

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scale(1.13);
    left: 0;
    background-image: linear-gradient(150deg, #151932 40%, #2c305a);
    z-index: -1;
    border-radius: 50%;

    box-shadow: 15px 30px 130px #000000e6, -10px 0px 100px #4a54a9;
  }

  @media screen and (max-width: 320px) {
    ::before {
      transform: scale(1.03);
    }
  }
`;

// JSX
const Counter = () => {
  return (
    <Parent>
      <canvas height="300" width="300" id="counter" />

      <span id="timer">
        <span className="result"></span>
      </span>
      <span className="pause">PAUSE</span>
    </Parent>
  );
};

export default Counter;
