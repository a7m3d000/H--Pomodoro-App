// Packages & Frameworks
import styled from "styled-components";

// Styles
const Parent = styled.article`
  text-align: center;
  font-size: 1.5rem;
  font-wight: bold;
  color: #c9d1ee;
  padding-top: 50px;
`;

// JSX
const Heading = () => {
  return (
    <Parent>
      <div className="container">
        <h1>pomodoro</h1>
      </div>
    </Parent>
  );
};

export default Heading;
