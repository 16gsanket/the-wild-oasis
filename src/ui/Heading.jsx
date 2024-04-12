import styled, {css} from "styled-components";
import Row from "./Row";

// const text = css`
//     text-align: center;
// `

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      background-color: #69ae69;
    `}
  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      background-color: #69ae69;
    `}
    ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 400;
      background-color: #69ae69;
    `}
    line-height:1.4;
`;

Row.defaultProps={
    type:'vertical'
}

export default Heading;
