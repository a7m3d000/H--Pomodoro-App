// Packages & Frameworks
import styled from "styled-components";

// Styles
const Parent = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    background-color: #151932;
    border-radius: 35px;
    padding: 10px 10px;
    over-flow: hidden;
    gap: 3px;

    li {
      padding: 15px 25px;

      a {
        font-size: 1rem;
        font-weight: bold;
        color: #5d6179;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @media screen and (max-width: 425px) {
        padding: 10px 18px;

        a {
          font-size: 0.75rem;
        }
      }

      @media screen and (max-width: 320px) {
        padding: 10px 20px;

        a {
          font-size: 0.6rem;
        }
      }
    }

    .active {
      background-color: #f8716f;
      border-radius: 30px;

      a {
        color: #151932;
      }
    }
  }
`;

// JSX
const Modes = () => {
  return (
    <Parent>
      <div className="container">
        <ul className="modes">
          <li className="active" id="work">
            <a href="#" title="Pomodoro Timer Button">
              pomodoro
            </a>
          </li>
          <li id="shortBreak">
            <a href="#" title="Short Break Timer Button">
              short break
            </a>
          </li>
          <li id="longBreak">
            <a href="#" title="Long Break Timer Button">
              long break
            </a>
          </li>
        </ul>
      </div>
    </Parent>
  );
};

export default Modes;
