// Packages & Frameworks
import styled from "styled-components";

// Files
import { FaCog } from "react-icons/fa";

// Styles
const Parent = styled.article`
  .icon {
    font-size: 2rem;
    margin-top: 200px;
    color: #797e9d;
    transition: 0.5s;

    :hover {
      cursor: pointer;
      color: #d5e1fd;
    }
  }
`;

// JSx
const Sittings = () => {
  return (
    <Parent>
      <div className="hello"></div>
      <div className="container">
        <FaCog className="icon" />
      </div>
    </Parent>
  );
};

export default Sittings;
